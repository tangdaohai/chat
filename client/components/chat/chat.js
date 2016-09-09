/**
 * Created by Jerry on 16/8/19.
 */

import React from "react";
import { Row, Col} from "antd";
import { browserHistory } from "react-router";

import Interaction from "./users/Interaction";
import Content from "./content/Content";

import { connect } from "react-redux";

@connect( state => ({ messageList : state.send, user : state.signIn.userInfo }) )
export default class Chat extends React.Component{

    componentWillMount(){
        if(!this.props.user){
            //未登陆, 重定向会首页
            browserHistory.push("/");
        }
    }

    render(){
        
        const childStyles = {
            height : "90%",
            borderRadius : "10px",
            border: '2px solid #e9e9e9'
        };
        
        return <div style={ { height : "100%"} }>
            <Row type="flex" justify="center" gutter={16} style={ { height : "100%"} }>
                <Col span={6} style={ { height : "100%"} }>
                    <Interaction { ...this.props } childStyles = {childStyles} />
                </Col>
                <Col span={15} style={ { height : "100%"} }>
                    <Content childStyles = {childStyles} />
                </Col>
            </Row>
        </div>
    }
}