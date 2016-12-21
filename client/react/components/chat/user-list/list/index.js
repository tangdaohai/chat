/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Avatar from "../../avatar";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeCurrentChatUser } from "../../../../action/UserAction";

@connect( state => ({ userMap: state.userMap}),
    dispatch => ({ ...bindActionCreators( { changeCurrentChatUser} , dispatch) }) )
export default class List extends React.Component{

    changeUser = _id => () => {
        //变更当前的聊天对象
        this.props.changeCurrentChatUser(this.props.userMap.get(_id));
    };
    
    render(){
        
        return <div className="user-list">
            <ul>
                { Array.from(this.props.userMap.values()).map( (val, index) => <_Item user={val} key={val._id} click={ this.changeUser(val._id) }/>) }
            </ul>
        </div>
    }
}

class _Item extends React.Component{
    
    render(){
        
        const { user } = this.props;
        
        return <li className={`flex ${user.active ? "active": ""}`}>
            <Avatar avatar={ user.avatar } user={user} />
            <div className="name-content flex" onClick={this.props.click}>
                <div className="no-wrap">{ user.name }</div>
                <div className="no-wrap">{ user.lastMessage }</div>
                { user.unread && <div className="user-unread">{user.unread}</div> }
            </div>
        </li>
    }
} 