/**
 * Created by Jerry on 16/8/26.
 */

import { SEND_MESSAGE } from "../action/SendAction";

export default function send(messageList, action){

    const message = {
        isMyself : false,
        time : "11:39:25",
        text : "这样就可以在 App 这个组件里面通过 props 拿到 Store 的 dispatch 方法",
        sender : "省略两个字"
    }, me = {
        isMyself : true,
        time : "14:32:05",
        text : "恩啊 好的",
        sender : "省略两个字"
    };

    const arr = [message, me];

    arr.push(me);
    arr.push(me);
    arr.push(message);
    arr.push(message);

    messageList = messageList || arr;


    switch (action.type){
        case SEND_MESSAGE : 
            return [
                ...messageList,
                action.message
            ];
        
        default :
            return messageList;
    }
}