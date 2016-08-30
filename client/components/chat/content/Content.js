/**
 * Created by Jerry on 16/8/22.
 */

import React from "react";

import MessageList from "./message/MessageList";
import UserName from "./user-name/UserName";
import Send from "./send/Send";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as SendAction from "../../../action/SendAction";


//将state.counter绑定到props的counter
function mapStateToProps(state){
    return {
        messageList : state.send
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators( SendAction, dispatch )
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Content extends React.Component{

    render() {

        return <div style={ this.props.childStyles } >
            <UserName userName = "省略两个字." />
            <MessageList { ...this.props } />
            <Send {...this.props}/>
        </div>
    }

}