/**
 * Created by Jerry on 16/8/19.
 */

import React from "react";
import { Row, Col} from "antd";

export default class Chat extends React.Component{

    render(){
        return <div style={ { height : "100%"} }>
            <Row type="flex" justify="center">
                <Col span={6}>左侧</Col>
                <Col span={15}>右侧</Col>
            </Row>
        </div>
    }
}