import React from 'react';

import { addPostAC, updateAddPostAC} from "../../../redux/profileReducer";

import {ReduxStoreType} from "../../../redux/redux-store";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostContainer = () =>{

    return(
    <StoreContext.Consumer>
        {
            store=> {
                let state = store.getState().profilePage
                const addPosts = () => {

                    store.dispatch(addPostAC(store.getState().profilePage.NewTextPost))
                }
                const newTextChangeHandler = (body: string) => {
                    store.dispatch(updateAddPostAC(body))

                }

        return(<MyPost addPosts={addPosts} state={state} newTextChangeHandler={newTextChangeHandler}/>)}}
        </StoreContext.Consumer>
        )}

export default MyPostContainer;