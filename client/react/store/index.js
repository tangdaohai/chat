/**
 * Created by Jerry on 16/12/12.
 */


import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-diff-logger';

//引入所有的 reducer
import * as reducers from "../reducers";

const store = create();

export default store;

function create() {
    //将 reducer, react-router 与 redux 绑定
    const reducer = combineReducers({
        ...reducers,
        form: formReducer,
        routing: routerReducer
    });

    const store = createStore(reducer, compose(
        applyMiddleware(thunk),
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    //开发模式下启动 热替换模块
    if (process.env.NODE_ENV === 'development' && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index');
            store.replaceReducer(nextReducer(store.asyncReducers));
            // store.replaceReducer(combineReducers(nextReducer));
        })
    }

    return store;
}