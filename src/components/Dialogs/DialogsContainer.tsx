import React from 'react'
import { addMessageAC, updateMessageAC} from "../../redux/dialogReducer";

import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store=>{
                    let addMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    const newTextChangeHandler = (body:string) =>{
                        store.dispatch(updateMessageAC(body))
                    }
                   return( <Dialogs addMessage={addMessage} newTextChangeHandler={newTextChangeHandler} store={store} />)
            }}
        </StoreContext.Consumer>
                )

}


export default DialogsContainer;
