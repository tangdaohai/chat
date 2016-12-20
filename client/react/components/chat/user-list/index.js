/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import List from "./list";
import MyName from "./MyName";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOnlineUser } from "../../../action/UserAction";

@connect( state => ({user: state.user, userList: state.userList}), dispatch => ({ ...bindActionCreators( { getOnlineUser } , dispatch) }) )
export default class UserList extends React.Component{

    constructor(props){
        super(props);
        props.getOnlineUser();
    }
    
    render(){
        
        return <div className="list-container">
            <div>
                <div className="nav-container flex">
                    <div className="about-me">
                        <MyName/>
                    </div>
                    <div className="search">
                        <i className="fa fa-search fa-lg" aria-hidden="true" />
                    </div>
                </div>
                
                <List userList = {this.props.userList}/>
            </div>
        </div>
    }
}