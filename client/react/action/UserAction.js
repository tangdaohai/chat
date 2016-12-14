/**
 * Created by Jerry on 16/12/12.
 */
import socket from "../Socket";

export const SIGN_IN_SUCCESS = "login-success";
export const USER_LIST = "user-list";
export const CHANGE_CHAT_USER = "change-chat-user";
export const CURRENT_CHAT_USER = "current-chat-user";
/**
 * 登陆成功
 * @param user
 * @returns {{type: string, user: *}}
 */
export function loginSuccess(user){
    return {
        type: SIGN_IN_SUCCESS,
        user
    }
}

/**
 * 注册成功
 * @param user
 */
export function registerSuccess(user){
    return {
        type: SIGN_IN_SUCCESS,
        user
    }
}

/**
 * 获取在线用户
 */
export function getOnlineUser(){
    return dispatch => {
        socket.emit("user/getOnLine", result => {
            if(result.success){
                return dispatch({
                    type: USER_LIST,
                    userList: result.content
                });
            }
        });
    }
}

/**
 * 修改当前的聊天用户
 * @param id
 * @returns {{type: string, id: *}}
 */
export function changeCurrentChatUser(_id){
    return {
        type: CHANGE_CHAT_USER,
        _id
    }
}

/**
 * 当前的聊天用户
 * @param currentChatUser
 * @returns {{type: string, currentChatUser: *}}
 */
export function setCurrentChatUser(currentChatUser){
    return {
        type: CURRENT_CHAT_USER,
        currentChatUser
    }
}