/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";
import { browserHistory, } from "react-router";

import Header from "./header";
import MessageList from "./message-list";
import Send from "./send";

import { connect } from "react-redux";
@connect( state => ({ user: state.user, currentChatUser: state.currentChatUser }))
export default class CHat extends React.Component{

    componentWillMount(){
        if(!this.props.user._id){
            //用户未登陆
            browserHistory.push("/react/sign-in");
        }
    }

    render(){

        return this.props.currentChatUser._id ? <div className="dialogue-container flex">
            <Header />

            <MessageList />

            <Send />
        </div> : <div />;
    }
}