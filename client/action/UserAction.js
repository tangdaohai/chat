/**
 * Created by Jerry on 16/9/6.
 */

import io from "../Socket";
import { browserHistory } from "react-router";

export const LOGIN_SUCCESS = "login-success";
export const LOGIN_FAIL = "login-fail";

function loginSuccess(user){
    return {
        type : LOGIN_SUCCESS,
        user
    }
}

function loginFail(user){
    return {
        type : LOGIN_FAIL,
        user
    }
}

export function login(user){
    return dispatch => {
        //通过 socket 请求
        io.emit("user/login", user, (user) =>{
            console.log(user);
            if(user){
                //登陆成功
                browserHistory.push("/chat");
                return dispatch(loginSuccess(user));
            }else{
                return dispatch(loginFail());
            }
        });
    }
}