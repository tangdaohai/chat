/**
 * Created by Jerry on 16/8/23.
 * 
 * 用户列表
 */

import React from "react";
import { Badge } from 'antd';
import QueueAnim from "rc-queue-anim";

import "./user.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOnLine } from "../../../../action/UserAction";

@connect( state => ({ onLines : state.onLines }), dispatch => ({ ...bindActionCreators( { getOnLine } , dispatch) }) )
export default class UserList extends React.Component{

    constructor(props){
        super(props);
        //初始化这个组件后 获取在线用户
        props.getOnLine();
    }

    render() {

        const list = this.props.onLines || [];

        return <div className="list-scroll">
            <ul className="user-list">
                <QueueAnim  delay= {500}>
                    {
                        list.length > 0 ?
                            list.map( (val, index) => <User UserInfo={val} key={index} /> )
                            :
                            <div style={ {marginTop: 100, padding : 20} }>
                                <h3>除了你之外,暂无其他用户在线……</h3>
                            </div>
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
                <Badge className="user-head" count={ UserInfo.unread || 10 }>
                    <img src={ UserInfo.imgSrc || "http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg" }/>
                </Badge>
                <div className="user-name">
                    <p>{ UserInfo.nick }</p>
                </div>
            </div>
        </li>
    }
}