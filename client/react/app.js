/**
 * Created by Jerry on 16/12/9.
 */

import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { Provider } from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux';

import "./components/basic.css";
import Login from "./components/login";
import Chat from "./components/chat";

//引入创建好的 store.
import store from "./store";
//路由生成规则, 与 redux 结合.
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(<Provider store= { store }>
    <Router history = { history }>
        <Route path="/react">
            <IndexRedirect to="sign-in" />
            <Route path="sign-:type" component={ Login } />
            <Route path="chat" component = { Chat } />
        </Route>
    </Router>
</Provider>, document.querySelector("#main"));