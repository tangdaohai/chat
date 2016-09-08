/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";

import MessageList from "./message/MessageList";
import UserName from "./user-name/UserName";
import Send from "./send/Send";

export default class Content extends React.Component{

    render() {

        return <div style={ this.props.childStyles } >
            <UserName userName = "省略两个字." />
            <MessageList/>
            <Send/>
        </div>
    }

}