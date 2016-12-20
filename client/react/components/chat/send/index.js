/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { send } from "../../../action/MessageAction";

@connect( state => ({
        user: state.user,
        currentChatUser: state.currentChatUser
}), dispatch => ({
    ...bindActionCreators( { send } , dispatch)
}) )
export default class Send extends React.Component{

    sendHandle= event =>{
        if(event.keyCode === 13){

            const value = event.target.value || "";

            if(!value.trim()){
                return;
            }

            //发送消息
            this.props.send({
                time: Date.now(),
                content: value,
                from: this.props.user._id,
                to: this.props.currentChatUser._id
            });

            event.target.value = "";
        }
    };

    render(){

        return <div className="edit-send flex">
            <div className="send-menu">
                <i className="fa fa-paperclip fa-lg" aria-hidden="true" />
                <i className="fa fa-smile-o fa-lg" aria-hidden="true" />
            </div>
            <input placeholder="Leave a comment…" className="edit-text" onKeyUp={ this.sendHandle }>
            </input>
            <div className="send-btn">
                <i className="fa fa-paper-plane-o fa-lg" aria-hidden="true" />
            </div>
        </div>
    }
}