/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import "./icon.css";

export default class SwitchIcon extends React.Component{

    render(){
        const { classArr = [], iconText, click } = this.props;
        return <div className={"switch-icon flex f-c " + classArr.join(" ")}
                    onClick={ click }>
            <i className="fa fa-plus" aria-hidden="true" />
            <span>{ iconText }</span>
        </div>
    }

}