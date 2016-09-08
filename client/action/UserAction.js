/**
 * Created by Jerry on 16/9/6.
 */

import io from "../Socket";

export const LOGIN_SUCCESS = "login-success";
export const LOGIN_FAIL = "login-fail";

function loginSuccess(user){
    return {
        type : LOGIN_SUCCESS,
        user
    }
}

function loginFail(message){
    return {
        type : LOGIN_FAIL,
        message
    }
}

export function login(user){
    return dispatch => {
        //通过 socket 请求
        io.emit("user/login", user, (result) =>{
            if(result.success){
                return dispatch(loginSuccess(result.content));
            }else{
                return dispatch(loginFail(result.message));
            }
        });
    }
}