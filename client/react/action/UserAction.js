/**
 * Created by Jerry on 16/12/12.
 */

export const SIGN_IN_SUCCESS = "login-success";
export const SIGN_IN_FAIL = "login-fail";

export function login(user){
    
    return {
        type : SIGN_IN_SUCCESS,
        user
    }
}