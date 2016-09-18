/**
 * Created by Jerry on 16/8/15.
 */

import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
//引入所有的组件
import * as Components from "./components";
//引入创建好的 store.
import store from "./store";

import "./index.css";
import "antd/dist/antd.css"

//路由生成规则, 与 redux 结合.
const history = syncHistoryWithStore(browserHistory, store);

//路由框架
class App extends React.Component{

    render() {

        return <div className="absolute-center shadow app">
            { this.props.children }
        </div>
    }
}

const NotFound = () =>  <div>
    <h1>我屮艸芔茻,这个页面飞了, 404……</h1>
</div>;

ReactDom.render(<Provider store = { store }>
    <Router history = {history}>
        <Route path="/" component={App}>
            <IndexRedirect to="sign-in" />
            <Route path="chat" component={ Components.Chat } />
            <Route path="sign-:type" component={ Components.Sign } />
            <Route path="404" component= { NotFound } />
        </Route>
    </Router>
</Provider>, document.querySelector("#main"));