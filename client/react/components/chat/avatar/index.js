/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import "./avatart.css";
/**
 * 头像
 */
export default class Acatar extends React.Component{
    
    render(){
        
        const { user = {name: ""}, click } = this.props;

        return <div className="img-container flex f-c" onClick={ click }>
            {user.avatar ? <img src={ "https://www.gravatar.com/avatar/" + user.avatar } /> : <div className="no-avatar">{user.name ? user.name[0] : ""}</div>}
        </div>
    }
}