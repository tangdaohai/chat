/**
 * Created by Jerry on 16/12/18.
 */
import React from "react";
import ReactModal from "../modal"

import "./user-setting.css";

export default class Setting extends React.Component{
    
    render(){
        
        return <ReactModal>
            <div className="user-setting flex">
                <div className="setting-menu flex">
                    <span className="menu-item">Account</span>
                    <span className="menu-item">password</span>
                </div>
                <div className="setting-content">

                </div>
            </div>
        </ReactModal>
    }
}