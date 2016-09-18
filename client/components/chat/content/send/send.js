/**
 * Created by Jerry on 16/8/25.
 */

import React from "react";
import "./send.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as SendAction from "../../../../action/SendAction";

@connect(state => ({user: state.signIn.userInfo, current: state.current}),
    (dispatch) => ( { ...bindActionCreators( SendAction, dispatch) } ))
export default class Send extends React.Component{

    handleKeyUp = (e) => {
        if(e.keyCode !== 13){
            return;
        }

        const value = e.target.value.replace(/\n$/, "");
        e.target.value = "";

        this.props.send({
            withUser: this.props.current.to,
            from: this.props.user._id,
            isMyself : true,
            time : new Date().toLocaleString(),
            text : value,
            sender : this.props.user.nick
        });
    };

    render(){

        return <div className="input-area">
            <textarea className="send-input"
                      type="textarea"
                      onKeyUp = {this.handleKeyUp} />
        </div>
    }
}
