/**
 * Created by Jerry on 16/9/7.
 */

import { SIGN_IN_SUCCESS, SIGN_IN_FAIL } from "../action/UserAction";

/**
 * 返回 登陆 信息
 * @param userInfo
 * @param action
 * @returns {*}
 */
export function signIn(userInfo = {}, action){

    const result = Object.assign( {}, userInfo);

    switch (action.type){
        case SIGN_IN_SUCCESS :
            result.userInfo = action.user;
            delete result.errorMessage;
            break;
        case SIGN_IN_FAIL :
            result.errorMessage = action.message;
            delete result.userInfo;
    }

    return result;
}