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
    MODIFY_MY_NAME,
    MODIFY_AVATAR_TYPE
} from "../action/UserAction";

//用于用户列表下面的最后一条消息
import { SEND_MESSAGE, NEW_MESSAGE} from "../action/MessageAction";

/**
 * 登陆用户的信息
 * @param user
 * @param action
 * @returns {*}
 */
export function user(user = {}, action){

    const u = Object.assign({}, user);
    switch (action.type){
        case SIGN_IN_SUCCESS : //登录或者注册成
            return Object.assign( {}, action.user);
        case MODIFY_MY_NAME:    //修改名称
            u.name = action.name;
            return u;
        case MODIFY_AVATAR_TYPE: //修好使用的头像方式
            u.avatarType = action.avatarType;
            return u;
    }
    
    return user;
}

/**
 * 在线用户列表
 * @param userMap
 * @param action
 * @returns {*}
 */
export function userMap(userMap = new Map(), action){

    const map = new Map(userMap);

    let user, id;

    switch (action.type){
        case USER_LIST: //获取在线用户列表
            action.userList.forEach(val => map.set( val._id, val ));
            return map;

        case CHANGE_CHAT_USER:  //变更当前的聊天用户
            let id = action.currentChatUser._id;
            user = map.get(id);
            user.active = true;
            //清除未读消息
            user.unread = undefined;
            map.set(id, user);

            return map;
        
        case UNREAD:    //收到未读消息
            
            user = map.get(action.from);
            user.unread ? user.unread += 1 : user.unread = 1;
            map.set(action.from, user);
            return map;
        
        case ADD_USER:  //有用户上线
            map.set(action.user._id, action.user);
            return map;
        
        case USER_LEAVE:   //有用户离开
            map.delete(action.user._id);
            return map;
        
        case SEND_MESSAGE:
            
            id = action.message.to;
            user = map.get(id);
            user.lastMessage = action.message.content;
            map.set(id, user);
            return map;
        
        case NEW_MESSAGE:
            id = action.message.from;
            user = map.get(id);
            user.lastMessage = action.message.content;
            map.set(id, user);
            return map;
    }
    
    return userMap;
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