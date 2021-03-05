import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ReduxStoreType} from "../../redux/redux-store";


type DialogsPropsType = {

    addMessage: () => void
    store: ReduxStoreType
    newTextChangeHandler: (body: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogPage
    let DialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElement = state.messages.map(m => <Message message={m.message}/>)
    let NewTextMessage = state.NewTextMessage
    let addMessage = () => {
        props.addMessage()

    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.newTextChangeHandler(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElement}
            </div>
            <div className={s.message}>
                {MessageElement}
                <textarea placeholder={"Введите что-нибудь"} value={NewTextMessage}
                          onChange={newTextChangeHandler}></textarea>
                <button onClick={addMessage}>new post</button>
            </div>
        </div>
    )
}


export default Dialogs;
