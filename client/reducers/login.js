/**
 * Created by Jerry on 16/9/7.
 */

import { LOGIN_SUCCESS, LOGIN_FAIL } from "../action/UserAction";

/**
 * 返回 登陆 信息
 * @param login
 * @param action
 * @returns {*}
 */
export function login(login = {}, action){

    const result = Object.assign( {}, login);

    switch (action.type){
        case LOGIN_SUCCESS :
            result.userInfo = action.user;
            delete result.errorMessage;
            break;
        case LOGIN_FAIL :
            result.errorMessage = action.message;
            delete result.userInfo;
    }

    return result;
}