import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import {StoreType, RootStateType, ActionTypes} from "./redux/state";
import Friends from "./components/Friends/Friends";



type appPropsType = {
    state:RootStateType
    dispatch:(action:ActionTypes)=>void
}

const App = (props:appPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-writter">
                <Header/>
                <Navbar/>
                <div className="app-writter-body">
                    <Route path='/dialogs' render={ () => <Dialogs dispatch={props.dispatch} NewTextMessage={props.state.dialogsPage.NewTextMessage} dialogData={props.state.dialogsPage.dialogs} messageData={props.state.dialogsPage.messages}/> }/>
                    <Route path='/profile' render={() => <Profile dispatch={props.dispatch} postData={props.state.profilePage.posts} NewTextPost={props.state.profilePage.NewTextPost}  />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>

                </div>


            </div>
        </BrowserRouter>
    );
}
export default App;
