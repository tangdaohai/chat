/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Avatar from "../avatar";
export default class Header extends React.Component{
    
    render(){
        
        return <div className="header-nav flex">
            <div className="flex avatar">
                <Avatar avatar="https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246" />

                <span className="name">Allison Grayce</span>
            </div>
            <div className="menu-container">
                <i className="fa fa-video-camera fa-lg" aria-hidden="true" />
                <i className="fa fa-expand fa-lg" aria-hidden="true" />
                <i className="fa fa-ellipsis-v fa-lg" aria-hidden="true" />
            </div>
        </div>
    }
}