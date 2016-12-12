/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Header from "./header";
import MessageList from "./message-list";
import Send from "./send";

export default class CHat extends React.Component{

    render(){

        return <div className="dialogue-container flex">
            <Header />

            <MessageList />

            <Send />
        </div>
    }
}