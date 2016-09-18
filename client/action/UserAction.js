/**
 * Created by Jerry on 16/9/6.
 */

import io from "../Socket";

export const SIGN_IN_SUCCESS = "login-success";
export const SIGN_IN_FAIL = "login-fail";
export const ON_LINE_USER = "on-line-user";
export const ADD_USER = "new-user";
export const USER_LEAVE = "user-leave";
export const CHANGE_CURRENT = "change-current";

/**
 * 变更当前聊天对象
 * @param current
 */
export function changeCurrent(current){
    
    return {
        type : CHANGE_CURRENT,
        current
    }
}

/**
 * 获取在线用户
 * @returns {function()}
 */
export function getOnLine(){
    return dispatch => {
        io.emit("user/getOnLine", (result) => {
            if(result.success){
                return dispatch({
                    type : ON_LINE_USER,
                    users : result.content
                });
            }
        });
    };
}

/**
 * 新用户上线
 * @param user
 * @returns {{type: string, newUser: *}}
 */
export function addUser(user) {
    return {
        type : ADD_USER,
        user
    }
}

/**
 * 用户离开
 * @param user
 * @returns {{type: string, user: *}}
 */
export function userLeave(user){
    return {
        type : USER_LEAVE,
        user
    }
}

/**
 * 登陆
 * @param user
 * @returns {function()}
 */
export function signIn(user){
    return dispatch => {
        //通过 socket 请求
        io.emit("user/signIn", user, (result) =>{
            if(result.success){
                return dispatch(success(result.content));
            }else{
                return dispatch(fail(result.message));
            }
        });
    }
}


/**
 * 注册
 * @param user
 */
export function signUp(user){

    return dispatch => {
        io.emit("user/signUp", user, (result) => {
           if(result.success){
               //注册成功 直接进行登陆
               return dispatch(success(result.content));
           }else{
               return dispatch(fail(result.message));
           }
        });
    }
}

//登陆或注册成功
function success(user){
    return {
        type : SIGN_IN_SUCCESS,
        user
    }
}

//登陆或注册失败
function fail(message){
    return {
        type : SIGN_IN_FAIL,
        message
    }
}
