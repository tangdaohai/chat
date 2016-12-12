/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import List from "./list";

export default class UserList extends React.Component{
    
    render(){
        
        return <div className="list-container">
            <div>
                <div className="nav-container flex f-c">
                    <div>
                        <i className="fa fa-bars fa-lg" aria-hidden="true" />
                    </div>
                    <div>
                        <i className="fa fa-search fa-lg" aria-hidden="true" />
                        <i className="fa fa-ellipsis-v fa-lg" aria-hidden="true" />
                    </div>
                </div>
                
                <List />
            </div>
        </div>
    }
}