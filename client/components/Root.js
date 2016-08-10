/**
 * Created by Jerry on 16/8/4.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import App from "../containers/App";
import Hello from './test/hello';
import Login from "../components/user/login";

const store = configureStore();

ReactDom.render(<div>
    <Login />
    <Hello text = 'World' />
    <Provider store = { store }>
        <App />
    </Provider>
</div>, document.querySelector("#main"));
