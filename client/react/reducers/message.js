/**
 * Created by Jerry on 16/12/14.
 */
import { SEND_MESSAGE, ACCEPT_MESSAGE} from "../action/MessageAction";

export function messageList(messageList = {}, action){

    switch (action.type){
        case SEND_MESSAGE:
            const list = Object.assign({}, messageList);
            const id = action.to;
            if(list[id]){
                list[id].push(action.message);
            }else{
                list[id] = [action.message];
            }
            return list;
        case ACCEPT_MESSAGE:
    }
    
    return messageList;
}