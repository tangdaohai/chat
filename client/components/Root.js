/**
 * Created by Jerry on 16/8/4.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import App from "../containers/App";
import Login from "./user/Login";

const store = configureStore();

ReactDom.render(<div>
    <Login />
    <Hello text = 'World' />
    <Provider store = { store }>
        <App />
    </Provider>
</div>, document.querySelector("#main"));
