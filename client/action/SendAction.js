/**
 * Created by Jerry on 16/8/26.
 */
import io from "../Socket";

export const SEND_MESSAGE = "send-message";
export function send(message) {
    
    let { time, text, sender } = message;
    
    io.emit("send message", {
        time, text, sender,
        withUser: {
            _id: message.from,
            nick: sender
        },
        to : message.withUser._id,
        from : message.from,
    });
    
    return newMessage(message);
}

export function newMessage(message){
    return {
        type : SEND_MESSAGE,
        message : message
    }
}