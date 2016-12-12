/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

export default class Send extends React.Component{
    
    render(){
        
        return <div className="edit-send flex">
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
    }
}