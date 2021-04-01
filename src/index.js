import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

import { combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";

// import reducers
import navItemClickedReducer from "./components/store/reducers/navIItemReducer";
import visibleNavReducer from "./components/store/reducers/visibleNavReducer";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose; // for redux extension in development

const rootReducer = combineReducers({
  navItemReducer: navItemClickedReducer,
  visibleNavReducer: visibleNavReducer
})

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
