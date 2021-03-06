/**
 * Created by Jerry on 16/12/12.
 */
import React from "react";

import "./chat.css";
import UserList from "./user-list";
import Chat from "./Chat";

export default class Index extends React.Component{
    
    render(){

        return <div className="container flex f-c">
            { this.props.children }
            <div className="main flex">
                <UserList />

                <Chat />
            </div>
        </div>
    }
}