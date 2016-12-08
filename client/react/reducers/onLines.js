/**
 * Created by Jerry on 16/8/31.
 */
import { ON_LINE_USER, ADD_USER, USER_LEAVE } from "../action/UserAction";
import { UNREAD, READ } from "../action/MessageAction";

export default function onLines(onLines = [], action) {

    const users = Object.assign([], onLines);

    switch (action.type){

        case ON_LINE_USER:  //在线用户列表

            return Object.assign([], action.users);

        case ADD_USER:  //添加新用户

            users.push(action.user);
            return users;

        case USER_LEAVE:    //过滤出离开用户的 id

            return users.filter((user) => user._id !== action.user._id);

        case UNREAD:

            for(let user of users){
                if(user._id === action.message.from){
                    user.unread = user.unread ? user.unread + 1 : 1;
                }
            }

            return users;
        
        case READ:

            for(let user of users){
                if(user._id === action._id){
                    user.unread = 0;
                }
            }
            return users;

        default : return onLines;
    }
}