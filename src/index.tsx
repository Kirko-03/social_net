import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let dialogData = [
    {name: "Kirik", id: 1},
    {name: "Dimik", id: 2},
    {name: "max", id: 3},
    {name: "dima", id: 4},
    {name: "sasha", id: 5}
]
let messageData = [
    {message: "hello"},
    {message: "Как дела придурок?)"},
    {message: "Игноришь?"}
]
let postData = [{ message:"Hi",like:1},
    { message:"Whats up?",like:1},
    { message:"Learn Pituhon(((",like:-13},
    {message:"LOSEEER",like:187},
    {message:"Соси пинчер",like:100}]

ReactDOM.render(
    <BrowserRouter>
        <App dialogData={dialogData} messageData={messageData} postData={postData}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
