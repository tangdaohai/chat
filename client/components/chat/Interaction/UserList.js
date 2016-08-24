/**
 * Created by Jerry on 16/8/23.
 * 
 * 用户列表
 */

import React from "react";
import { Badge } from 'antd';

import "./user.css";

export default class UserList extends React.Component{

    render() {
        
        return <div className="list-scroll">
            <ul className="user-list">
                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <Badge className="user-head" count={5}>
                            <img src="http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg"/>
                        </Badge>
                        <div className="user-name">
                            <p>省略两个字……</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    }

}