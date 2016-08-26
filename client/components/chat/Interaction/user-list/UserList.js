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

        const UserInfo = {
            unread : 10,
            imgSrc : "http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg",
            userName : "省略两个字"
        };

        const userList = [];

        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);
        userList.push(UserInfo);

        return <div className="list-scroll">
            <ul className="user-list">
                <QueueAnim  delay= {500}>
                    {
                        userList.map( (val, index) => <User UserInfo={val} key={index} /> )
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