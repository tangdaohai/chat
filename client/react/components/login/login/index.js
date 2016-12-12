/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import {browserHistory} from "react-router";

import SwitchIcon from "../switch-icon";
import "./login.css";

export default class Login extends React.Component {

    toChat() {
        browserHistory.push("/react/chat");
    }

    render() {
        return <div>
            <SwitchIcon iconText="注册" click={ () => browserHistory.push("/react/sign-up") } />
            <div className="login form-box flex">
                <span className="title">Login</span>
                <input placeholder="Email" className="input-basic-60 input"/>
                <input placeholder="Password" className="input-basic-60 input"/>
                <div className="remember-me">
                    <input id="remember-me-box" type="checkbox" className="remember-me-box"/>
                    <label htmlFor="remember-me-box">Remember me</label>
                </div>
                <button className="btn" onClick={ this.toChat }>SUBMIT</button>
            </div>
        </div>
    }
}