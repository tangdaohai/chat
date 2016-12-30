/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import { Field, reduxForm } from 'redux-form';
import {browserHistory} from "react-router";

import "./login.css";
import SwitchIcon from "../switch-icon";
import notification from "../../notification";
import Loading from "../../loading";
import Request from "../../../Request";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginSuccess } from "../../../action/UserAction";
import socket from "../../../Socket";

@connect( state => ({ form : state.form }), dispatch => ({ ...bindActionCreators( { loginSuccess } , dispatch) }) )
class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isLoading : false
        }
    }

    login() {
        //加载 loading
        this.setState({ isLoading: true });
        //利用 fetch 向 server 端发起 post 请求。
        Request.post("/user/login", { ...this.props.form.login.values, socketId: socket.id}).then(result => {
            this.setState({ isLoading: false });
            if(result.success){
                this.props.loginSuccess(result.content);
                browserHistory.push("/react/chat");
            }else{
                //登陆失败
                notification.error(result.message);
            }
        });
    }

    render() {
        return <div>
            { this.state.isLoading ? <Loading /> : "" }
            <SwitchIcon iconText="注册" click={ () => browserHistory.push("/react/sign-up") } />
            <div className="login form-box flex">
                <span className="title">Login</span>
                <Field name="email" component="input" placeholder="Email" className="input-basic-60 input"/>
                <Field name="password" component="input" type="password" placeholder="Password" className="input-basic-60 input"/>
                <div className="remember-me">
                    <Field name="remember" component="input" id="remember-me-box" type="checkbox" className="remember-me-box"/>
                    <label htmlFor="remember-me-box">Remember me</label>
                </div>
                <button className="btn" onClick={ this.login.bind(this) }>SUBMIT</button>
            </div>
        </div>
    }
}

export default reduxForm({
    form: "login"
})(Login);