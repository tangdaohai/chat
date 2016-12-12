/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

export default class CHat extends React.Component{

    render(){

        return <div className="dialogue-container flex">
            <div className="header-nav flex">
                <div className="flex avatar">
                    <div className="img-contatiner">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246" />
                    </div>
                    <span className="name">Allison Grayce</span>
                </div>
                <div className="menu-container">
                    <i className="fa fa-video-camera fa-lg" aria-hidden="true" />
                    <i className="fa fa-expand fa-lg" aria-hidden="true" />
                    <i className="fa fa-ellipsis-v fa-lg" aria-hidden="true" />
                </div>
            </div>
            <div className="dialogue flex">

                <div className="dialogue-right flex">
                    <div className="img-contatiner">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/623359/avatars/mini/9f913570d43869d5d3efb89ac684093b.png?1442219999" />
                    </div>
                    <span className="arrow" />
                    <div className="content flex">
                        <span>Hey</span>
                    </div>
                </div>

                <div className="dialogue-left flex">
                    <div className="img-contatiner">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246" />
                    </div>
                    <span className="arrow" />
                    <div className="content flex">
                        <span>Hi there</span>
                    </div>
                </div>

                <div className="dialogue-right flex">
                    <div className="img-contatiner">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/623359/avatars/mini/9f913570d43869d5d3efb89ac684093b.png?1442219999" />
                    </div>
                    <span className="arrow" />
                    <div className="content flex">
                        <span>I'm back in town…you wanna meet-up for coffee?</span>
                    </div>
                </div>

                <div className="dialogue-left flex">
                    <div className="img-contatiner">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246" />
                    </div>
                    <span className="arrow" />
                    <div className="content flex">
                        <span>Yeah that sounds great! Have a new project to run by you.</span>
                    </div>
                </div>

            </div>
            <div className="edit-send flex">
                <div className="send-menu">
                    <i className="fa fa-paperclip fa-lg" aria-hidden="true" />
                    <i className="fa fa-smile-o fa-lg" aria-hidden="true" />
                </div>
                <input placeholder="Leave a comment…" className="edit-text">
                </input>
                <div className="send-btn">
                    <i className="fa fa-paper-plane-o fa-lg" aria-hidden="true" />
                </div>
            </div>
        </div>
    }
}