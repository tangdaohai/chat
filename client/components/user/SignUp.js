/**
 * Created by Jerry on 16/8/18.
 */

import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router";
const FormItem = Form.Item;

import { connect } from "react-redux";
import { signUp } from "../../action/UserAction";
import { bindActionCreators } from "redux";

@connect( state => ({ user : state.signIn.userInfo }), dispatch => ({ ...bindActionCreators( { signUp }, dispatch) }) )
class Login extends React.Component{

    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());

        const { email, password, rePassword } = this.props.form.getFieldsValue();

        this.props.signUp({ email, password, rePassword });
        
        // console.log(this.props.signUp);
    }

    render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };

        return <div style={{ margin : "120px auto", maxWidth : "480px" }}>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem {...formItemLayout} label="邮箱 :">
                    <Input placeholder="请输入邮箱" {...getFieldProps('email')}/>
                </FormItem>

                <FormItem {...formItemLayout} label="密码 :">
                    <Input type="password" {...getFieldProps('password', { initialValue: '' })} placeholder="请输入密码" />
                </FormItem>

                <FormItem {...formItemLayout} label="确认密码 :">
                    <Input type="password" {...getFieldProps('rePassword', { initialValue: '' })} placeholder="请输入密码" />
                </FormItem>

                <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                    <Link to="/sign-in" style={ {marginLeft : "20px"} }>已有账号,登陆</Link>
                </FormItem>
            </Form>
        </div>;
    }
}

export default Form.create()(Login);
