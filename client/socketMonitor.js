/**
 * Created by Jerry on 16/9/15.
 */

import { addUser, userLeave } from "./action/UserAction";
import { newMessage } from "./action/SendAction";
import store from "./store";

export function socketMonitor (io){

    //有用户加入
    io.on("add user", (data) => store.dispatch(addUser(data.content)) );
    //用户离开
    io.on("user leave", (data) => store.dispatch(userLeave(data.content)) );
    //接收消息
    io.on("new message", (data) => {
        store.dispatch(newMessage(data.content))
    });
}