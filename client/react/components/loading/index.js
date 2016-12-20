/**
 * Created by Jerry on 16/12/13.
 */

import React from "react";

import "./loading.css";

export default class Loading extends React.Component{

    render(){

        return <div className="loading flex f-c">
            <div className="loading-circle circle-size-2x"></div>
        </div>
    }
}