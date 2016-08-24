/**
 * Created by Jerry on 16/8/24.
 * 消息列表
 */

import React from "react";

import "./message.css";

export default class MessageList extends React.Component{

    render(){

        return <div className="message-list">
            <Message />
            <Message />
            <Message />
        </div>
    }
}

class Message extends React.Component{
    
    render(){

        return <div className="message-line">
            <div className="head">
                <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
            </div>
            <div className="content">
                <p>6:37:56</p>
                <div>
                    <div className="popover-arrow"></div>
                    <div className="text">好卡好卡的哈萨克和贷款哈萨克和贷款</div>
                </div>
            </div>
        </div>
    }
}