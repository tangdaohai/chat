/**
 * Created by Jerry on 16/12/14.
 */
export const SEND_MESSAGE = "send-message";
export const NEW_MESSAGE = "new-message";

import socket from "../Socket";

export function send(message){
    
    socket.emit("send message", message);
    
    return {
        type: SEND_MESSAGE,
        message
    }
}

export function newMessage(message){
    return{
        type: NEW_MESSAGE,
        message
    }
}