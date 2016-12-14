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
        
        const { avatar, user = {name: ""}, click } = this.props;

        return <div className="img-container flex f-c" onClick={ click }>
            {avatar ? <img src={ avatar } /> : <div className="no-avatar">{user.name ? user.name[0] : ""}</div>}
        </div>
    }
}