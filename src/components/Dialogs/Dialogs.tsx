import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/store";


type DialogsPropsType = {
    dialogsPage:dialogsPageType
    addMessage: () => void
    newTextChangeHandler: (body: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogPage = props.dialogsPage
    let DialogElement = dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElement = dialogPage.messages.map(m => <Message message={m.message}/>)
    let NewTextMessage = dialogPage.NewTextMessage
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
