import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import reducer from '@/reducer';
import { createStore } from 'redux'

import * as serviceWorker from './serviceWorker';

// 引入mock接口
import mock from "./mock";
//引入路由文件
import IRouter from './router/router';
//创建store
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <IRouter />
    </Provider>
, document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
