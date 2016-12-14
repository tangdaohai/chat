/**
 * Created by Jerry on 16/12/13.
 */
import React from "react";
import ReactDom from "react-dom";

import "./notice.css";
class Notice extends React.Component{

    render(){
        const { message, type="info" } = this.props;
        
        return <div className={`notice`}>
            <div className="notice-middle">
                <div className={`notice-content flex f-c notice-${type}`}>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    }
}

function instance(){
    const div = document.createElement("div");
    document.body.appendChild(div);
    return div;
}

function show(message, type, time = 3000) {
    const div = instance();
    ReactDom.render(<Notice message={message} type={type} />, div);
    setTimeout(() => document.body.removeChild(div), time);
}

function info(message, time){
    show(message, "info", time);
}

function error(message, time){
    show(message, "error", time);
}

function warning(message, time){
    show(message, "warning", time);
}

function success(message, time){
    show(message, "success", time);
}

const notification =  {
    info, success, warning, error
};

export default notification;