/**
 * Created by Jerry on 16/8/25.
 * 当前聊天的人
 */

import React from 'react';

export default class UserName extends React.Component{

    render(){

        const css = {
            borderBottom: "1px solid #e9e9e9",
            height: 40,
            textAlign: "center",
            paddingTop: 10
        };

        return <div style={ css }>
            <h5>{this.props.userName}</h5>
        </div>
    }
}
