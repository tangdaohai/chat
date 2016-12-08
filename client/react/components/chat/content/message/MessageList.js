/**
 * Created by Jerry on 16/8/24.
 * 消息列表
 */

import React from "react";

import "./message.css";

import { connect } from "react-redux";

@connect( state => ({ messageList : state.current.list }))
export default class MessageList extends React.Component{

    render(){

        const messageList = this.props.messageList || [];

        return <div className="message-list" ref="message-list">
            {
                messageList.map( (val, index) => <Message key={index} message={ val } />)
            }
        </div>
    }

    //初次渲染
    componentDidMount(){
        this._initScrollTop();
    }

    //props 或者 state 新数据 渲染完成后的调用方法
    componentDidUpdate(){
        this._initScrollTop();
    }

    //调整滚动条高度
    _initScrollTop(){
        //在渲染完毕后 将 message list 的滚动条高度调整到最下面
        this.refs["message-list"].scrollTop = 100000;
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