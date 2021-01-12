import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
  return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className= 'app-wrapper-content'>
            <Navbar/>
            <h1>Warning</h1>
            <Route path={'/dialogs'} component={Dialogs}/>
            <Route path={'/profile'} component={Profile}/>

            <Dialogs/>
          <Profile />
        </div>
      </div>
      </BrowserRouter>
);
}

export default App;