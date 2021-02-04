import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <h1>Warning</h1>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile
                         profilePage={props.state.profilePage}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;