/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import "./index.css";
import Login from "./login";
import Register from "./register";

export default class Index extends React.Component {

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