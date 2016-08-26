/**
 * Created by Jerry on 16/8/19.
 */

import React from "react";
import { Row, Col} from "antd";

import Interaction from "./Interaction/Interaction";
import Content from "./content/Content";

export default class Chat extends React.Component{

    render(){

        const childStyles = {
            height : "90%",
            borderRadius : "10px",
            border: '2px solid #e9e9e9'
        };
        
        return <div style={ { height : "100%"} }>
            <Row type="flex" justify="center" gutter={16} style={ { height : "100%"} }>
                <Col span={6} style={ { height : "100%"} }>
                    <Interaction childStyles = {childStyles} />
                </Col>
                <Col span={15} style={ { height : "100%"} }>
                    <Content { ...this.props } childStyles = {childStyles} />
                </Col>
            </Row>
        </div>
    }
}