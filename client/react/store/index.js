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

    const args = [applyMiddleware(thunk), applyMiddleware(logger)];

    if( process.env.NODE_ENV === 'development'){
        args.push((window.devToolsExtension ? window.devToolsExtension() : f => f));
    }

    const store = createStore(reducer, compose( ...args ));

    // 开发模式下启动 热替换模块
    if (process.env.NODE_ENV === 'development' && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index').default;
            store.replaceReducer(nextReducer());
            // store.replaceReducer(combineReducers(nextReducer));
        })
    }

    return store;
}