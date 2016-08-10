/**
 * Created by Jerry on 16/8/10.
 */

import { INCREMENT_TYPE, DECREMENT_TYPE} from "../action/countAction";

export default function counter(count= 0, action){
    switch (action.type){
        case INCREMENT_TYPE :
            return ++count;
        case DECREMENT_TYPE :
            return --count;
        default :
            return count;
    }
}