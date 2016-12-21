/**
 * Created by Jerry on 16/12/12.
 */
import socket from "../Socket";

export const SIGN_IN_SUCCESS = "login-success";
export const USER_LIST = "user-list";
export const CHANGE_CHAT_USER = "change-chat-user";
export const UNREAD = "unread";
export const ADD_USER = "add-user";
export const USER_LEAVE= "user-leave";

export const MODIFY_MY_NAME = "modify-my-name";
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
                console.log(result.content);
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
 * @param currentChatUser
 * @returns {{type: string, id: *}}
 */
export function changeCurrentChatUser(currentChatUser){
    return {
        type: CHANGE_CHAT_USER,
        currentChatUser
    }
}

/**
 * 用户上线
 * @param user
 * @returns {{type: string, user: *}}
 */
export function addUser(user){
    return {
        type: ADD_USER,
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
        type: USER_LEAVE,
        user
    }
}

/**
 * 未读消息
 * @param from
 * @returns {{type: string, from: *}}
 */
export function unread(from){
    return {
        type: UNREAD,
        from
    }
}

/**
 * 修改名称
 * @param name
 * @returns {function()}
 */
export function modifyMyName(name){
    return dispatch => {
        socket.emit("user/modifyMyName", name, result => {
            console.log(result);
            return dispatch({
                type: MODIFY_MY_NAME,
                name
            });
        });
    }
}