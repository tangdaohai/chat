/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import { Field, reduxForm } from 'redux-form';
import {browserHistory} from "react-router";

import notification from "../../notification";
import SwitchIcon from "../switch-icon";
import "./register.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { registerSuccess } from "../../../action/UserAction";
import socket from "../../../Socket";

@connect( state => ({ form : state.form }), dispatch => ({ ...bindActionCreators( { registerSuccess } , dispatch) }) )
class Register extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isLoading : false
        }
    }

    register(){
        socket.emit("user/signUp", this.props.form.register.values, result =>{
           if(result.success){
               this.props.registerSuccess(result.content);
               browserHistory.push("/react/chat");
           }else{
               //注册失败
               notification.error(result.message);
           }
        });
    }

    render() {
        return <div>
            { this.state.isLoading ? <Loading /> : "" }
            <SwitchIcon classArr={ ["register-switch-icon"] } iconText="登陆" click={ () => browserHistory.push("/react/sign-in") } />
            <div className="register form-box flex">
                <span className="title">Register</span>
                <Field name="name" component="input" placeholder="Name" className="input-basic-60 input"/>
                <Field name="email" component="input" placeholder="Email" className="input-basic-60 input"/>
                <Field name="password" component="input" type="password" placeholder="Password" className="input-basic-60 input"/>
                <button className="btn" onClick={ this.register.bind(this) }>SUBMIT</button>
            </div>
        </div>
    }
}

export default reduxForm({
    form: "register"
})(Register);