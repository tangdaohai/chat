/**
 * Created by Jerry on 16/12/19.
 */
import React from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

import notification from "../notification";
import socket from "../../Socket";

@connect( state => ({ form: state.form }) )
class Password extends React.Component{

    updatePassword = () => {
        const password = this.props.form.password.values;
        if(password.confirmPassword !== password.newPassword){
            return notification.error("两次密码不一样");
        }

        socket.emit("user/modifyPassword", password, (result) => {
            if(result.success){
                notification.success("修改成功");
                this.props.reset();
            }else{
                notification.error(" 失败, 请确认旧密码是否正确");
            }
        });
    };

    render(){
        return <div className="setting-container flex">
            <span>Old Password</span>
            <Field name="oldPassword" component="input" type="password" className="setting-input"/>
            <span>new Password</span>
            <Field name="newPassword" component="input" type="password" className="setting-input"/>
            <span>Confirm Password</span>
            <Field name="confirmPassword" component="input" type="password" className="setting-input"/>
            
            <button className="setting-save" onClick={ this.updatePassword }>Save</button>
        </div>
    }
}

export default  reduxForm({
    form: "password"
})(Password);