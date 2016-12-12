/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {browserHistory} from "react-router";

import "./index.css";
import Login from "./login";
import Register from "./register";

export default class Index extends React.Component {

    changeHistory = (isLogin) => () =>browserHistory.push("/react/sign-" + ( isLogin ? "up" : "in"));

    render() {

        const isLogin = this.props.params.type === "in";

        return <div className="index-container container flex f-c">
            <ReactCSSTransitionGroup
                component="div"
                className="index-body"
                transitionName="switch"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={800}
            >
                { React.cloneElement(isLogin ? <Login /> : <Register />, {
                    key: location.pathname
                }) }
            </ReactCSSTransitionGroup>
        </div>
    }
}