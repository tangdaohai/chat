/**
 * Created by Jerry on 16/8/26.
 */
export const SEND_MESSAGE = "send-message";
export function send(message) {
    return {
        type : SEND_MESSAGE,
        message : message
    }
}