import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import store from "./reducers/store";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
,
document.getElementById('root'));
registerServiceWorker();