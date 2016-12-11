/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from "react-router";

import Login from "./Login";
import Register from "./Register";
import "../basic.css";
import "./index.css";

export default class Index extends React.Component{

    changeHistory = (isLogin) => () =>browserHistory.push("/react/sign-" + ( isLogin ? "up" : "in"));

    render(){

        const isLogin = this.props.params.type === "in";

        return <div className="index-container container flex f-c">
            <div>
                <div className={"switch-icon flex f-c " + (isLogin ? "" : "register-switch-icon")}
                     onClick={ this.changeHistory(isLogin) }>
                    <i className="fa fa-plus" aria-hidden="true" />
                    <span>{ isLogin ? "注册" : "登陆" }</span>
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    className="index-body"
                    transitionName="switch"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    { React.cloneElement(isLogin ? <Login /> : <Register />, {
                        key: location.pathname
                    }) }
                </ReactCSSTransitionGroup>
            </div>
        </div>
    }
}