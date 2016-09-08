/**
 * Created by Jerry on 16/8/26.
 */

import { SEND_MESSAGE } from "../action/SendAction";

export default function message(message = { current : { to : "", list : [] }, withUser : {} }, action){

    const list = [ ...message.current.list ];

    switch (action.type){
        case SEND_MESSAGE :
            list.push(action.message);
            message.current.list = list;
            return message;
        
        default :
            return message;
    }
}