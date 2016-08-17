/**
 * Created by Jerry on 16/8/10.
 */

import React from "react";
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from "react-bootstrap";

export default class Login extends React.Component{

    render(){
        return <div style={{marginTop : "150px"}}>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={4}>
                        Email
                    </Col>
                    <Col sm={6}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={4}>
                        Password
                    </Col>
                    <Col sm={6}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={4} sm={4}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={4} sm={4}>
                        <Button>
                            登录
                        </Button>
                        {"  "}
                        <Button bsStyle="link">
                            注册新账号
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    }
}