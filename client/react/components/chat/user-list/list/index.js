/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Avatar from "../../avatar";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeCurrentChatUser, setCurrentChatUser } from "../../../../action/UserAction";

@connect( state => ({ userList: state.userList}),
    dispatch => ({ ...bindActionCreators( { changeCurrentChatUser, setCurrentChatUser} , dispatch) }) )
export default class List extends React.Component{

    changeUser = index => () => {
        const currentUser = this.props.userList[index];
        this.props.setCurrentChatUser(currentUser);
        this.props.changeCurrentChatUser(currentUser["_id"]);
    };
    
    render(){
        
        return <div className="user-list">
            <ul>
                { this.props.userList.map( (val, index) => <_Item User={val} key={val._id} click={ this.changeUser(index) }/>) }
            </ul>
        </div>
    }
}

class _Item extends React.Component{
    
    render(){
        
        const { User } = this.props;
        
        return <li className={`flex ${User.active ? "active": ""}`}>
            <Avatar avatar={ User.avatar } user={User} />
            <div className="name-content flex" onClick={this.props.click}>
                <div className="no-wrap">{ User.name }</div>
                <div className="no-wrap">Let's grab some coffee and tea, so keep easy</div>
            </div>
        </li>
    }
} 