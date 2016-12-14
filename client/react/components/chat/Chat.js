/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Header from "./header";
import MessageList from "./message-list";
import Send from "./send";

import { connect } from "react-redux";
@connect( state => ({ currentChatUser: state.currentChatUser }))
export default class CHat extends React.Component{

    render(){

        return this.props.currentChatUser._id ? <div className="dialogue-container flex">
            <Header />

            <MessageList />

            <Send />
        </div> : <div />;
    }
}