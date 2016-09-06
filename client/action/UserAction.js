/**
 * Created by Jerry on 16/9/6.
 */

import io from "../Socket";

export const LOGIN_SUCCESS = "login-success";
export const LOGIN_FAIL = "login-fail";

export function loginSuccess(user){
    return {
        type : LOGIN_SUCCESS,
        user
    }
}

export function loginFail(user){
    return {
        type : LOGIN_FAIL,
        user
    }
}

export function login(user){
    io.emit("user/login", user, (user) =>{
        
    });
}