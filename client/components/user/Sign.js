/**
 * Created by Jerry on 16/9/9.
 */

import React from "react";
import { Form, Input, Button, Checkbox, Spin, Alert } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { Link, browserHistory } from "react-router";
const FormItem = Form.Item;

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signIn, signUp } from "../../action/UserAction";

@connect( state => ({ loginResult : state.signIn }), dispatch => ({ ...bindActionCreators( { signIn, signUp } , dispatch) }) )
class Sign extends React.Component{

    state = {
        loading : false    //控制loading框
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { nick, email, password, rePassword } = this.props.form.getFieldsValue();

        this.setState({ loading : true });

        switch ( this.props.params.type){
            case "in" :
                //登陆
                this.props.signIn({ email, password });
                break;
            case "up" :
                //注册
                this.props.signUp( { nick, email, password, rePassword } );
                break;
        }
    };

    handleChangeRouter = () => {
        //重置表单
        this.props.form.resetFields();
        //隐藏错误提示
        this.setState({
            showError : false
        });
    };

    componentWillMount(){
        if(!["in", "up"].includes(this.props.params.type)){
            browserHistory.push("/404");
        }
    }


    closeLogin(){
        this.setState({
            loading : false
        });
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.loginResult.userInfo){
            //登陆成功
            this.closeLogin();
            browserHistory.push("/chat");
        }else if(nextProps.loginResult.errorMessage){

            const message = nextProps.loginResult.errorMessage;

            if(this.state.messageTimestamp !== message.timestamp){
                this.setState({
                    messageTimestamp : message.timestamp
                });

                //登陆失败的错误信息
                this.closeLogin();
                this.setState({
                    showError : true
                });
                this.setState({
                    err : message.message
                });
            }
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
                <Checkbox {...getFieldProps('remember', { initialValue: true, valuePropName: 'checked' })}>记住密码</Checkbox>
            </FormItem>

            <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                <Button type="primary" onClick={this.handleSubmit} >登陆</Button>
                <Link to="/sign-up" style={ {marginLeft : "20px"} } onClick={this.handleChangeRouter}>注册新用户</Link>
            </FormItem>
        </div>;

        Layer.up = <div>
            <FormItem {...formItemLayout} label="昵称 :">
                <Input placeholder="请输入昵称" {...getFieldProps('nick')}/>
            </FormItem>

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
                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                <Link to="/sign-in" style={ {marginLeft : "20px"} } onClick={this.handleChangeRouter}>已有账号,登陆</Link>
            </FormItem>
        </div>;

        return <Spin size="large" spinning={this.state.loading} >
            <div style={{ margin : "120px auto", maxWidth : "480px" }}>
                <Form horizontal>
                    { Layer[this.props.params.type] }

                    <FormItem wrapperCol={{ span: 14, offset: 6 }} >
                        <QueueAnim
                            animConfig={[
                        { opacity: [1, 0], translateY: [0, 50] },
                        { opacity: [1, 0], translateY: [0, -50] }
                      ]}>
                            { this.state.showError ? <Alert key="a"
                                                            description={ this.state.err }
                                                            type="error"
                                                            showIcon
                            /> : null }
                        </QueueAnim>
                    </FormItem>
                </Form>
            </div>
        </Spin>;
    }
}

export default Form.create()(Sign);
