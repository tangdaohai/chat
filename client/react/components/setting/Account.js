/**
 * Created by Jerry on 16/12/19.
 */

import React from "react";
import { connect } from "react-redux";

@connect( state => ({ user: state.user }) )
export default class Account extends React.Component{

    render(){
        return <div className="setting-container flex">
            <span>Email</span>
            <input className="setting-input setting-disabled" disabled defaultValue={ this.props.user.email }/>
        </div>
    }
}