/**
 * Created by Jerry on 16/12/19.
 */

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Avatar from "../chat/avatar";
import { modifyAvatarType } from "../../action/UserAction";

@connect( state => ({ user: state.user }), dispatch => ({
    ...bindActionCreators( { modifyAvatarType } , dispatch)
}) )
export default class Account extends React.Component{

    /**
     * 修改使用头像的方式
     * 0: 系统默认,
     * 2: gravatar
     * @param type
     * @returns {function()}
     */
    modifyAvatarType = type => {
        return () =>{
            //如果选择的跟现在的不一样,更新数据
            if(this.props.user.avatarType !== type){
                this.props.modifyAvatarType(type);
            }
        }
    };

    render(){
        return <div className="setting-container flex">
            <span>Your Email</span>
            <input className="setting-input setting-disabled" disabled defaultValue={ this.props.user.email }/>
            <span>Avatar Type</span>
            <div className="setting-avatar flex">
                <Avatar user={ this.props.user } />
                <label
                    className="setting-avatar-label"
                    onClick={ this.modifyAvatarType(0) }
                ><input defaultChecked={ 0 === this.props.user.avatarType } name="avatar-type" type="radio" /> default</label>

                <label
                    className="setting-avatar-label"
                    onClick={ this.modifyAvatarType(1) }
                ><input defaultChecked={ 1 === this.props.user.avatarType } name="avatar-type" type="radio" /> gravator</label>
                <a className="what-gravator" target="_blank" href="http://www.gravator.com/">what's gravator?</a>
            </div>
        </div>
    }
}