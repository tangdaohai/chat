/**
 * Created by Jerry on 16/8/31.
 */
import { ON_LINE_USER, ADD_USER, USER_LEAVE } from "../action/UserAction";
import { SEND_MESSAGE } from "../action/SendAction";

export default function onLines(onLines = [], action) {

    const users = Object.assign([], onLines);

    switch (action.type){
        case ON_LINE_USER:
            //在线用户列表
            return Object.assign([], action.users);
        case ADD_USER:
            //添加新用户
            users.push(action.user);
            return users;
        case USER_LEAVE:
            //过滤出离开用户的 id
            return users.filter((user) => user._id !== action.user._id);
        case SEND_MESSAGE:
            let message = action.message;

            if(message.isMyself){
                return onLines;
            }else{
                //谁来的, 是否当前聊天的对象
                
            }
            return onLines;
        default : return onLines;
    }
}