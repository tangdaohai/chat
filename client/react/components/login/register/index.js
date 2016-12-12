/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import {browserHistory} from "react-router";

import SwitchIcon from "../switch-icon";
import "./register.css";
export default class Register extends React.Component {

    toChat() {
        browserHistory.push("/react/chat");
    }

    render() {
        return <div>
            <SwitchIcon classArr={ ["register-switch-icon"] } iconText="登陆" click={ () => browserHistory.push("/react/sign-in") } />
            <div className="register form-box flex">
                <span className="title">Register</span>
                <input placeholder="Email" className="input-basic-60 input"/>
                <input placeholder="Password" className="input-basic-60 input"/>
                <button className="btn" onClick={ this.toChat }>SUBMIT</button>
            </div>
        </div>
    }
}