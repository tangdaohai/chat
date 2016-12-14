/**
 * Created by Jerry on 16/12/14.
 */
export const SEND_MESSAGE = "send-message";
export const ACCEPT_MESSAGE = "accept-message";

export function send(to, message){
    return {
        type: SEND_MESSAGE,
        to,
        message
    }
}