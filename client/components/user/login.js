/**
 * Created by Jerry on 16/8/18.
 */

import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component{

    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
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
                    <Input placeholder="请输入邮箱" {...getFieldProps('userName')}/>
                </FormItem>

                <FormItem {...formItemLayout} label="密码 :">
                    <Input type="password" {...getFieldProps('pass', { initialValue: '' })} placeholder="请输入密码" />
                </FormItem>

                <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                    <Checkbox {...getFieldProps('remember', { initialValue: false, valuePropName: 'checked' })}>记住密码</Checkbox>
                </FormItem>

                <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                    <a style= {{marginLeft : "20px"}}>注册新账户</a>
                </FormItem>
            </Form>
        </div>;
    }
}

export default Form.create()(Login);
