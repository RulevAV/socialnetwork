import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Egor"},
    {id: 3, name: "Petr"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Elena"},
    {id: 6, name: "Victor"},
];
let dialogsmessages = [
    {id: 1, message: "asd"},
    {id: 2, message: "vcgh"},
    {id: 3, message: "1234"},
];
let postData = [
    {id:1, message:"hi, my friend",likesCount:15},
    {id:2, message:"perfect",likesCount:4},
    {id:3, message:"cool",likesCount:999},
];

ReactDOM.render(<App postData={postData} dialogsData={dialogsData} dialogsmessages={dialogsmessages}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
