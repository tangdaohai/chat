/**
 * Created by Jerry on 16/8/15.
 */

import React from "react";
import ReactDom from "react-dom";

import Login from "./user/login";
import Chat from "./chat/chat";

class App extends React.Component{
    render() {
        return this.props.isLogin ? <Login /> : <Chat/>;
    }
}

ReactDom.render(<App isLogin = {!1}/>, document.querySelector("#main"));