/**
 * Created by Jerry on 16/8/22.
 *
 * 显示头像
 */

import React from "react";
import QueueAnim from "rc-queue-anim";

import "./myself.css"

export default class Head extends React.Component{

    render() {

        const textStyle = {
            
        };

        return <QueueAnim className="my-head" delay= {500}>
            <div key = "a">
                <img  src="https://facebook.github.io/react/img/logo.svg"/>
                <div className="my-name">
                    <h5 className="name-text">React break async</h5>
                </div>
            </div>
        </QueueAnim>
    }
}