/**
 * Created by Jerry on 16/12/14.
 */
import { SEND_MESSAGE, NEW_MESSAGE} from "../action/MessageAction";

export function messageList(messageList = {}, action){

    const list = Object.assign({}, messageList);
    let id;
    switch (action.type){
        case NEW_MESSAGE :
             id = action.message.from; //发消息的人
            if(list[id]){
                list[id].push(action.message);
            }else{
                list[id] = [action.message];
            }
            return list;
        case SEND_MESSAGE:
            id = action.message.to;   //收消息的人
            if(list[id]){
                list[id].push(action.message);
            }else{
                list[id] = [action.message];
            }
            return list;
    }
    
    return messageList;
}