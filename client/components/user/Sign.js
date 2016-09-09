/**
 * Created by Jerry on 16/9/9.
 */

import React from "react";
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { Link, browserHistory } from "react-router";
const FormItem = Form.Item;

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signIn, signUp } from "../../action/UserAction";

@connect( state => ({ loginResult : state.signIn }), dispatch => ({ ...bindActionCreators( { signIn, signUp } , dispatch) }) )
class Sign extends React.Component{

    state = {
        loading : !1    //控制loading框
    };

    handleSubmit(e) {
        e.preventDefault();
        const { email, password, rePassword } = this.props.form.getFieldsValue();

        this.setState({ loading : !0 });

        switch ( this.props.params.type){
            case "in" :
                //登陆
                this.props.signIn({ email, password });
                break;
            case "up" :
                //注册
                this.props.signUp( { email, password, rePassword } );
                break;
        }
    }

    componentWillMount(){
        if(!["in", "up"].includes(this.props.params.type)){
            browserHistory.push("/404");
        }
    }


    closeLogin(){
        this.setState({ loading : !1 });
    }

    componentWillReceiveProps(nextProps){

        this.setState( {err : ""} );

        if(nextProps.loginResult.userInfo){
            //登陆成功
            this.closeLogin();
            browserHistory.push("/chat");
        }else if(nextProps.loginResult.errorMessage){
            //登陆失败的错误信息
            this.closeLogin();
            this.setState( { err : nextProps.loginResult.errorMessage } );

        }
    }


    render() {

        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };

        const Layer = {};

        //登陆
        Layer.in = <div>
            <FormItem {...formItemLayout} label="邮箱 :">
                <Input placeholder="请输入邮箱" {...getFieldProps("email")}/>
            </FormItem>

            <FormItem {...formItemLayout} label="密码 :">
                <Input type="password" {...getFieldProps('password', { initialValue: '' })} placeholder="请输入密码" />
            </FormItem>

            <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                <Checkbox {...getFieldProps('remember', { initialValue: false, valuePropName: 'checked' })}>记住密码</Checkbox>
            </FormItem>

            <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                <Button type="primary" htmlType="submit">确定</Button>
                <Link to="/sign-up" style={ {marginLeft : "20px"} }>注册新用户</Link>
            </FormItem>
        </div>;

        Layer.up = <div>
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
        </div>;

        return <Spin size="large" spinning={this.state.loading} >
            <div style={{ margin : "120px auto", maxWidth : "480px" }}>
                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    { Layer[this.props.params.type] }
                </Form>
                <h3>{ this.state.err }</h3>
            </div>
        </Spin>;
    }
}

export default Form.create()(Sign);
