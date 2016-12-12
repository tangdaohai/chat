/**
 * Created by Jerry on 16/12/9.
 */

import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import "./components/basic.css";
import Login from "./components/login";
import Chat from "./components/chat";

ReactDom.render(<Router history = {browserHistory}>
    <Route path="/react">
        <IndexRedirect to="sign-in" />
        <Route path="sign-:type" component={ Login } />
        <Route path="chat" component = { Chat } />
    </Route>
</Router>, document.querySelector("#main"));