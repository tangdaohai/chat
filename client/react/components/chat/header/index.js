/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Avatar from "../avatar";

import { connect } from "react-redux";
@connect( state => ({ currentChatUser: state.currentChatUser }))
export default class Header extends React.Component{
    
    render(){

        const chatUser = this.props.currentChatUser;
        
        return <div className="header-nav flex">
            <div className="flex avatar">
                <Avatar user={ chatUser }/>

                <span className="name">{ chatUser.name }</span>
            </div>
            <div className="menu-container">
                <i className="fa fa-video-camera fa-lg" aria-hidden="true" />
                <i className="fa fa-expand fa-lg" aria-hidden="true" />
                <i className="fa fa-ellipsis-v fa-lg" aria-hidden="true" />
            </div>
        </div>
    }
}