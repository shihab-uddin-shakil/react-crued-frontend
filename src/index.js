import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
axios.defaults.baseURL='http://127.0.0.1:2344';
axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
