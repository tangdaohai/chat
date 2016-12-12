/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Avatar from "../avatar";
export default class MessageList extends React.Component{

    render(){

        return <div className="dialogue flex">

            <_Message type="right"/>

            <div className="dialogue-left flex">
                <div className="img-container">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246" />
                </div>
                <span className="arrow" />
                <div className="content flex">
                    <span>Hi there</span>
                </div>
            </div>

            <div className="dialogue-right flex">
                <div className="img-container">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/623359/avatars/mini/9f913570d43869d5d3efb89ac684093b.png?1442219999" />
                </div>
                <span className="arrow" />
                <div className="content flex">
                    <span>I'm back in town…you wanna meet-up for coffee?</span>
                </div>
            </div>

            <div className="dialogue-left flex">
                <div className="img-container">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246" />
                </div>
                <span className="arrow" />
                <div className="content flex">
                    <span>Yeah that sounds great! Have a new project to run by you.</span>
                </div>
            </div>

        </div>
    }
}

class _Message extends React.Component{

    render(){

        const { type = "right" } = this.props;

        return <div className={`dialogue-${type} flex`}>

            <Avatar avatar="https://d13yacurqjgara.cloudfront.net/users/623359/avatars/mini/9f913570d43869d5d3efb89ac684093b.png?1442219999"/>
            
            <span className="arrow" />
            <div className="content flex">
                <span>Hey</span>
            </div>
        </div>
    }
}