/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Avatar from "../../avatar";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeCurrentChatUser } from "../../../../action/UserAction";

@connect( state => ({ userList: state.userList}),
    dispatch => ({ ...bindActionCreators( { changeCurrentChatUser} , dispatch) }) )
export default class List extends React.Component{

    changeUser = index => () => {
        //变更当前的聊天对象
        this.props.changeCurrentChatUser(this.props.userList[index]);
    };
    
    render(){
        
        return <div className="user-list">
            <ul>
                { this.props.userList.map( (val, index) => <_Item user={val} key={val._id} click={ this.changeUser(index) }/>) }
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
                <div className="no-wrap">Let's grab some coffee and tea, so keep easy</div>
                { user.unread && <div className="user-unread">{user.unread}</div> }
            </div>
        </li>
    }
} 