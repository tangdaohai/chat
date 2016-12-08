/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";

import MessageList from "./message/MessageList";
import UserName from "./user-name/UserName";
import Send from "./send/send";
import {connect} from "react-redux";

@connect(state => ({current: state.current}))
export default class Content extends React.Component {

    render() {

        let currentUser = this.props.current.to;
        
        if(currentUser){
            return <div style={ this.props.childStyles }>
                <UserName userName={currentUser.nick}/>
                <MessageList/>
                <Send/>
            </div>
        }else{
            return <div style={ this.props.childStyles }>
                <div className="absolute-center" style={ {width : 220, height: 80} }>
                    <p>从左侧列表中选择一个人开始聊天吧 😁</p>
                </div>
            </div>
        }
    }

}