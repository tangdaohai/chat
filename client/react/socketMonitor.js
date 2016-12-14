/**
 * Created by Jerry on 16/9/15.
 */

// import { addUser, userLeave } from "./action/UserAction";
// import { newMessage, unread } from "./action/MessageAction";
import store from "./store";

export function socketMonitor (io){

    //有用户加入
    // io.on("add user", (data) => store.dispatch(addUser(data.content)) );
    //用户离开
    // io.on("user leave", (data) => store.dispatch(userLeave(data.content)) );
    //接收消息
    // io.on("new message", (data) => {
    //     //收到的新消息
    //     const message = data.content;
    //     //获取当前正在聊天的人
    //     const current = store.getState().current;
    //     //如果发送消息的不是当前聊天的人, 触发未读action
    //     if(message.from !== current.to._id){
    //         store.dispatch(unread(message));
    //     }
    //     //接收消息
    //     store.dispatch(newMessage(message));
    // });
}