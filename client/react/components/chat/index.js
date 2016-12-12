/**
 * Created by Jerry on 16/12/12.
 */
import React from "react";

import "./chat.css";
import UserList from "./UserList";
import Chat from "./Chat";

export default class Index extends React.Component{
    
    render(){

        return <div className="container flex f-c">
            <div className="main flex">
                <UserList />

                <Chat />
            </div>
        </div>
    }
}