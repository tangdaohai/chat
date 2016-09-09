/**
 * Created by Jerry on 16/9/6.
 */

import io from "../Socket";

export const SIGN_IN_SUCCESS = "login-success";
export const SIGN_IN_FAIL = "login-fail";

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
