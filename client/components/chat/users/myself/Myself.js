/**
 * Created by Jerry on 16/8/22.
 *
 * 显示头像
 */

import React from "react";
import QueueAnim from "rc-queue-anim";

import "./myself.css";

import { connect } from "react-redux";

@connect( state => ( { user : state.signIn.userInfo} ) )
export default class Head extends React.Component{

    render() {

        const user = this.props.user || {};

        return <QueueAnim className="my-head" delay= {500}>
            <div key = "a">
                <img  src={ user.handImg }/>
                <div className="my-name">
                    <h5 className="name-text">{ user.nick }</h5>
                </div>
            </div>
        </QueueAnim>
    }
}