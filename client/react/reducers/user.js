/**
 * Created by Jerry on 16/12/12.
 */

import { 
    SIGN_IN_SUCCESS, 
    USER_LIST, 
    CHANGE_CHAT_USER,
    CURRENT_CHAT_USER
} from "../action/UserAction";

/**
 * 登陆用户的信息
 * @param user
 * @param action
 * @returns {*}
 */
export function user(user = {}, action){

    switch (action.type){
        case SIGN_IN_SUCCESS : 
            return Object.assign( {}, action.user);
    }
    
    return user;
}

/**
 * 在线用户列表
 * @param userList
 * @param action
 * @returns {*}
 */
export function userList(userList = [], action){

    const result = Object.assign([], userList);

    switch (action.type){
        case USER_LIST:
            return Object.assign( [], action.userList);
        case CHANGE_CHAT_USER:
            result.forEach( val => {
                val.active = val._id === action._id;
            });

            return result;
    }
    
    return userList;
}

/**
 * 当前的聊天对象
 * @param currentChatUser
 * @param action
 */
export function currentChatUser(currentChatUser = {}, action){
    if(action.type === CURRENT_CHAT_USER){
        return action.currentChatUser;
    }

    return currentChatUser;
}