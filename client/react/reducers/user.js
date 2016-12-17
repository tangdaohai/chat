/**
 * Created by Jerry on 16/12/12.
 */

import { 
    SIGN_IN_SUCCESS, 
    USER_LIST,
    CHANGE_CHAT_USER,
    UNREAD,
    ADD_USER,
    USER_LEAVE,
    MODIFY_MY_NAME
} from "../action/UserAction";

/**
 * 登陆用户的信息
 * @param user
 * @param action
 * @returns {*}
 */
export function user(user = {}, action){

    const u = Object.assign({}, user);
    switch (action.type){
        case SIGN_IN_SUCCESS : 
            return Object.assign( {}, action.user);
        case MODIFY_MY_NAME:
            u.name = action.name;
            return u;
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

    const list = Object.assign([], userList);

    switch (action.type){
        case USER_LIST: //获取在线用户列表
            return Object.assign( [], action.userList);

        case CHANGE_CHAT_USER:  //变更当前的聊天用户
            list.forEach( val => {
                val.active = val._id === action.currentChatUser._id;
                //清除未读消息
                val.unread = undefined;
            });

            return list;
        case UNREAD:    //收到未读消息
            for(let i = 0, length = list.length; i < length; i++){
                if(list[i]._id === action.from){
                    list[i].unread ? list[i].unread += 1 : list[i].unread = 1;
                    return list;
                }
            }

            return list;
        case ADD_USER:  //有用户上线
            list.push(action.user);
            return list;
        case USER_LEAVE:   //有用户离开
            return list.filter( val => val._id !== action.user._id);
    }
    
    return userList;
}

/**
 * 当前的聊天对象
 * @param currentChatUser
 * @param action
 */
export function currentChatUser(currentChatUser = {}, action){
    if(action.type === CHANGE_CHAT_USER){
        return action.currentChatUser;
    }

    return currentChatUser;
}