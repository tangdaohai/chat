/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";
import Myself from "./myself/Myself";
import UserList from "./user-list/UserList";

export default class Interaction extends React.Component{

    render() {
        
        return <div style={ { ...this.props.childStyles} } >
            <Myself />
            <UserList />
        </div>
    }

}
