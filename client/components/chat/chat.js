/**
 * Created by Jerry on 16/8/19.
 */

import React from "react";
import { Row, Col} from "antd";

import Interaction from "./users/Interaction";
import Content from "./content/Content";

//绑定 Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as SendAction from "../../action/SendAction";


//将state.counter绑定到props的counter
function mapStateToProps(state){
    return {
        messageList : state.send,
        user : state.user
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators( SendAction, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Chat extends React.Component{

    render(){

        // this.props.actions.getUserList();
        console.log(this.props.user);

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
                    <Content { ...this.props } childStyles = {childStyles} />
                </Col>
            </Row>
        </div>
    }
}