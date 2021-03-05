import React from 'react';

import { addPostAC, updateAddPostAC} from "../../../redux/profileReducer";

import {ReduxStoreType} from "../../../redux/redux-store";
import MyPost from "./MyPost";

type MyPostProps = {
    store:ReduxStoreType

}
const MyPostContainer = (props:MyPostProps) =>{
    let state = props.store.getState().profilePage
    const addPosts = () =>{

        props.store.dispatch(addPostAC(props.store.getState().profilePage.NewTextPost))
    }
    const newTextChangeHandler = (body:string) =>{
        props.store.dispatch(updateAddPostAC(body))

    }
    return(<MyPost addPosts={addPosts} state={state} newTextChangeHandler={newTextChangeHandler}/>)
}
export default MyPostContainer;