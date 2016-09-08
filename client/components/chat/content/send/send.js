/**
 * Created by Jerry on 16/8/25.
 */

import React from "react";
import "./send.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as SendAction from "../../../../action/SendAction";

@connect(null, (dispatch) => ( { ...bindActionCreators( SendAction, dispatch) } ))
export default class Send extends React.Component{

    handleKeyUp = (e) => {
        if(e.keyCode !== 13){
            return;
        }

        const value = e.target.value;
        e.target.value = "";

        this.props.send({
            isMyself : true,
            time : new Date().toLocaleString(),
            text : value,
            sender : "省略两个字"
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
