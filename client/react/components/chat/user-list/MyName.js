/**
 * Created by Jerry on 16/12/18.
 */
import React from "react";
import { browserHistory } from "react-router";
import Avatar from "../avatar";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { modifyMyName } from "../../../action/UserAction";

@connect( state => ({user: state.user, userList: state.userList}), dispatch => ({ ...bindActionCreators( { modifyMyName } , dispatch) }) )
export default class MyName extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isEdit: false
        };
    }

    /**
     * 切换到编辑 name
     */
    switchEdit = () => {
        this.setState({isEdit: true});
    };
    
    /**
     * 切换到展示 name
     * input 失去焦点触发
     */
    switchShow = () =>{
        this.setState({ isEdit: false});
    };

    /**
     * 修改名称, 按回车保存
     *
     * 如果名称无变化 不保存
     * @param event
     */
    modifyName = event =>{
      if(event.keyCode === 13){
          let newName = event.target.value;
          newName !== this.props.user.name && this.props.modifyMyName(newName);
           this.switchShow();
      }
    };

    setting(){
        browserHistory.push("/react/chat/setting");
    }

    render(){
        return <div className="flex f-c">
            <Avatar user={this.props.user} click={ this.setting }/>
            {
                this.state.isEdit
                    ?  <input type="text"
                              className="my-name edit-my-name"
                              autoFocus
                              onBlur={ this.switchShow }
                              onKeyUp={ this.modifyName }
                              defaultValue={ this.props.user.name }/>
                    :  <span className="my-name no-wrap" onClick={this.switchEdit}>{ this.props.user.name }</span>
            }

        </div>
    }
}