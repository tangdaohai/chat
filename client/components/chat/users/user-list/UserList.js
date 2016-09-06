/**
 * Created by Jerry on 16/8/23.
 * 
 * 用户列表
 */

import React from "react";
import { Badge } from 'antd';
import QueueAnim from "rc-queue-anim";

import "./user.css";

export default class UserList extends React.Component{

    render() {

        const list = this.props.userList || [];

        return <div className="list-scroll">
            <ul className="user-list">
                <QueueAnim  delay= {500}>
                    {
                        list.map( (val, index) => <User UserInfo={val} key={index} /> )
                    }
                </QueueAnim>
            </ul>
        </div>
    }
}

class User extends React.Component{

    render(){

        const UserInfo = this.props.UserInfo;

        return <li>
            <div>
                <Badge className="user-head" count={ UserInfo.unread }>
                    <img src={ UserInfo.imgSrc }/>
                </Badge>
                <div className="user-name">
                    <p>{ UserInfo.userName }</p>
                </div>
            </div>
        </li>
    }
}