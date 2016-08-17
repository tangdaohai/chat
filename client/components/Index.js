/**
 * Created by Jerry on 16/8/15.
 */

import React from "react";
import ReactDom from "react-dom";

import Login from "./user/login";

class App extends React.Component{
    render() {
        return (<div>
            { this.props.isLogin ? <Login /> : <h1>已登录.</h1>}
        </div>);
    }
}


ReactDom.render(<App isLogin = {!0}/>, document.querySelector("#main"));