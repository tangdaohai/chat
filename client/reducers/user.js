/**
 * Created by Jerry on 16/9/7.
 */

import { LOGIN_SUCCESS, LOGIN_FAIL } from "../action/UserAction";

export default function user(user = {}, action){

    switch (action.type){
        case LOGIN_SUCCESS :
            return Object.assign({}, action.user);
        case LOGIN_FAIL :
            return {};
        default :
            return user;
    }
}