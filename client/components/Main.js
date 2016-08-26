/**
 * Created by Jerry on 16/8/26.
 */

import React from "react";

import Login from "./user/Login";
import Chat from "./chat/Chat";

export  default class Main extends React.Component{
    render() {
        return !1 ? <Login /> : <Chat { ...this.props }/>;
    }
}