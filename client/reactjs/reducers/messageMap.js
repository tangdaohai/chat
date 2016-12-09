/**
 * Created by Jerry on 16/8/26.
 */

import { SEND_MESSAGE } from "../action/MessageAction";

export default function messageMap(messageMap = {}, action){

    const result = Object.assign({}, messageMap);
    
    switch (action.type){
        case SEND_MESSAGE :
            
            let message = action.message;
            let messageList = result[message.withUser._id] = result[message.withUser._id] || [];
            messageList.push(message);
            
            return result;
        default :
            return messageMap;
    }
}