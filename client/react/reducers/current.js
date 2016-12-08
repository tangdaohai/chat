/**
 * Created by Jerry on 16/9/18.
 */

import { SEND_MESSAGE } from "../action/MessageAction";
import { CHANGE_CURRENT } from "../action/UserAction";
export default function current(current = {to: "", list: []}, action){

    let result = Object.assign({}, current);

    switch(action.type){
        case SEND_MESSAGE:
            result.list = [ ...result.list, action.message];
            return result;
        
        case CHANGE_CURRENT:
            return Object.assign({}, action.current);
        
        default : return current;
        
    }
}