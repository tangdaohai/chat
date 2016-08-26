/**
 * Created by Jerry on 16/8/24.
 * 消息列表
 */

import React from "react";

import "./message.css";

export default class MessageList extends React.Component{

    render(){

        return <div className="message-list">
            {
                this.props.messageList.map( (val, index) => <Message key={index} message={ val } />)
            }
        </div>
    }
}

class Message extends React.Component{

    render(){

        const message = this.props.message || {};

        return message.isMyself ? this.getRightMessage(message) : this.getLeftMessage(message);
    }

    getLeftMessage(message){

        return <div className="message-line message-left">
            <div className="head">
                <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
            </div>
            <div className="content">
                <p>{message.time || new Date()}</p>
                <div>
                    <div className="popover-arrow"></div>
                    <div className="text">{message.text}</div>
                </div>
            </div>
        </div>;
    }

    getRightMessage(message){
        return <div className="message-line message-right">
            <div className="head">
                <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
            </div>
            <div className="content">
                <p>{message.time || new Date()}</p>
                <div>
                    <div className="popover-arrow"></div>
                    <div className="text">{message.text}</div>
                </div>
            </div>
        </div>
    }
}