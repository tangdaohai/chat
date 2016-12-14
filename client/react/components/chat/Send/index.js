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
            console.log(event.target.value);
            this.props.send(this.props.currentChatUser._id, {
                time: Date.now(),
                content: event.target.value,
                from: this.props.currentChatUser._id,
                to: this.props.user._id
            })

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