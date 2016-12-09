/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";
import { browserHistory } from "react-router";
import Login from "./Login";
import Register from "./Register";
import "../basic.css";
import "./index.css";

export default class Index extends React.Component{

    changeHistory( isLogin ){
        browserHistory.push("/react/user/sign-" + ( this.props.params.type === "sign-in" ? "up" : "in"));
    }

    render(){
        const isLogin = this.props.params.type === "sign-in";

        return <div className="index-container container flex f-c">
            <div>
                <div className={"switch-icon flex f-c " + (isLogin ? "" : "register-switch-icon")}
                     onClick={ this.changeHistory.bind(this) }>
                    <i className="fa fa-plus" aria-hidden="true" />
                    <span>{ isLogin ? "注册" : "登陆" }</span>
                </div>
                { isLogin ? <Login/> : <Register/> }
            </div>
        </div>
    }
}