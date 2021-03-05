import React from 'react'
import { addMessageAC, updateMessageAC} from "../../redux/dialogReducer";

import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";


type DialogsPropsType = {
store:ReduxStoreType
}
const DialogsContainer = (props: DialogsPropsType) => {
    let addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const newTextChangeHandler = (body:string) =>{
props.store.dispatch(updateMessageAC(body))
    }

    return ( <Dialogs addMessage={addMessage} newTextChangeHandler={newTextChangeHandler} store={props.store} />)

}


export default DialogsContainer;
