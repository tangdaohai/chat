/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import { Field, reduxForm } from 'redux-form';
import {browserHistory} from "react-router";

import {  error } from "../../notification";
import SwitchIcon from "../switch-icon";
import "./register.css";
class Register extends React.Component {

    toChat() {
        // browserHistory.push("/react/chat");
        error("密码错误");
    }

    render() {
        return <div>
            <SwitchIcon classArr={ ["register-switch-icon"] } iconText="登陆" click={ () => browserHistory.push("/react/sign-in") } />
            <div className="register form-box flex">
                <span className="title">Register</span>
                <Field name="name" component="input" placeholder="Name" className="input-basic-60 input"/>
                <Field name="email" component="input" placeholder="Email" className="input-basic-60 input"/>
                <Field name="password" component="input" type="password" placeholder="Password" className="input-basic-60 input"/>
                <button className="btn" onClick={ this.toChat }>SUBMIT</button>
            </div>
        </div>
    }
}

export default reduxForm({
    form: "register"
})(Register);