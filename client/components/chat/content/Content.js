/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";

export default class Content extends React.Component{

    render() {

        return <div style={ this.props.childStyles } >
            显示内容
        </div>
    }

}