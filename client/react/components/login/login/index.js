/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import { Field, reduxForm } from 'redux-form';
import {browserHistory} from "react-router";

import SwitchIcon from "../switch-icon";
import "./login.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../../../action/UserAction";

@connect( state => ({ form : state.form }), dispatch => ({ ...bindActionCreators( { login } , dispatch) }) )
class Login extends React.Component {



    toChat() {
        // this.props.login({
        //     user: "123",
        //     password: "123"
        // });
        // browserHistory.push("/react/chat");
        console.log(this.props.form);
    }

    render() {
        return <div>
            <SwitchIcon iconText="注册" click={ () => browserHistory.push("/react/sign-up") } />
            <div className="login form-box flex">
                <span className="title">Login</span>
                <Field name="email" component="input" placeholder="Email" className="input-basic-60 input"/>
                <Field name="password" component="input" placeholder="Password" className="input-basic-60 input"/>
                <div className="remember-me">
                    <Field name="remember" component="input" id="remember-me-box" type="checkbox" className="remember-me-box"/>
                    <label htmlFor="remember-me-box">Remember me</label>
                </div>
                <button className="btn" onClick={ this.toChat.bind(this) }>SUBMIT</button>
            </div>
        </div>
    }
}

export default reduxForm({
    form: "login"
})(Login);