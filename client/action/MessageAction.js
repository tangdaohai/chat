/**
 * Created by Jerry on 16/8/26.
 */
import io from "../Socket";

export const SEND_MESSAGE = "send-message";
export const UNREAD = "unread";
export const READ = "read";

/**
 * 发生信息
 * @param message
 * @returns {{type, message}|{type: string, message: *}}
 */
export function send(message) {
    
    let { time, text, sender } = message;
    
    //向服务器发送消息
    io.emit("send message", {
        time, 
        text, 
        sender,
        withUser: {
            _id: message.from,
            nick: sender
        },
        to : message.withUser._id,
        from : message.from
    });
    
    return newMessage(message);
}

/**
 * 接收新消息
 * @param message
 * @returns {{type: string, message: *}}
 */
export function newMessage(message){
    return {
        type: SEND_MESSAGE,
        message
    }
}

/**
 * 未读消息
 * @param message
 * @returns {{type: string, message: *}}
 */
export function unread(message){
    return {
        type: UNREAD,
        message
    }
}

/**
 * 已读消息
 * @param _id
 */
export function read(_id){
    return {
        type: READ,
        _id
    }
}