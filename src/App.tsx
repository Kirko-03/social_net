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



type AppPropsType = {
    dialogData:Array<dialogDataType>
    messageData:Array<messageDataType>
    postData:Array<postDataType>
}
type dialogDataType={
    name:string
    id:number
}
type messageDataType={
    message:string
}
type postDataType= {
        message: string
        like: number
}

const App = (props:AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-writter">
                <Header/>
                <Navbar/>
                <div className="app-writter-body">
                    <Route path='/dialogs' render={ () => <Dialogs dialogData={props.dialogData} messageData={props.messageData}/> }/>
                    <Route path='/profile' render={() => <Profile postData={props.postData}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>


            </div>
        </BrowserRouter>
    )
}


export default App;
