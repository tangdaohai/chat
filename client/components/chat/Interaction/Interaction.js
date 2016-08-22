/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";
import Head from "./Head";

export default class Interaction extends React.Component{

    render() {

        return <div style={ this.props.childStyles } >
            <Head/>
            功能区
        </div>
    }

}
