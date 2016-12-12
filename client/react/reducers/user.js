/**
 * Created by Jerry on 16/12/12.
 */

import { SIGN_IN_SUCCESS, SIGN_IN_FAIL } from "../action/UserAction";

export default function user(user = {}, action){

    switch (action.type){
        case SIGN_IN_SUCCESS : {
            return Object.assign( {}, action.user);
        }
    }
    
    return user;
}