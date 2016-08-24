/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";

import MessageList from "./message/MessageList";

export default class Content extends React.Component{

    render() {

        return <div style={ this.props.childStyles } >
            <MessageList />
        </div>
    }

}