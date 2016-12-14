/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import List from "./list";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOnlineUser } from "../../../action/UserAction";

@connect( state => ({ userList: state.userList}), dispatch => ({ ...bindActionCreators( { getOnlineUser } , dispatch) }) )
export default class UserList extends React.Component{

    constructor(props){
        super(props);
        props.getOnlineUser();
    }
    
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
                
                <List userList = {this.props.userList}/>
            </div>
        </div>
    }
}