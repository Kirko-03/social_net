import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import StoreContext, { Provider } from './StoreContext';


 let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
 </BrowserRouter>,document.getElementById("root")
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
