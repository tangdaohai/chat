/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";

import MessageList from "./message/MessageList";
import UserName from "./user-name/UserName";
import Send from "./send/Send";

export default class Content extends React.Component{

    constructor(props) {

        super(props);

        const message = {
            isMyself : false,
            time : "11:39:25",
            text : "这样就可以在 App 这个组件里面通过 props 拿到 Store 的 dispatch 方法",
            sender : "省略两个字"
        }, me = {
            isMyself : true,
            time : "14:32:05",
            text : "恩啊",
            sender : "省略两个字"
        };
        
        const arr = [message, me];
        
        arr.push(me);
        arr.push(me);
        arr.push(message);
        arr.push(message);
        
        this.state = {
            messageList : arr
        }
    }

    render() {

        return <div style={ this.props.childStyles } >
            <UserName userName = "省略两个字." />
            <MessageList messageList = {this.state.messageList} />
            <Send />
        </div>
    }

}