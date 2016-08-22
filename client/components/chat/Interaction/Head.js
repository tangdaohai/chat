/**
 * Created by Jerry on 16/8/22.
 *
 * 显示头像
 */

import React from "react";
import { QueueAnim } from "antd";

export default class Head extends React.Component{

    render() {

        return <QueueAnim delay= {500} style = { { height : 200} } >
            <div kay = "a">
                头像区
            </div>
        </QueueAnim>
    }
}