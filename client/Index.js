/**
 * Created by Jerry on 16/8/15.
 */

import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers/App";
const store = configureStore();


ReactDom.render(<Provider store = { store }>
    <App/>
</Provider>, document.querySelector("#main"));