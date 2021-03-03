import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { addMessageAC, updateMessageAC} from "../../redux/dialogReducer";
import {ActionTypes} from "../../redux/state";
import { ChangeEvent } from 'react';


type DialogsPropsType = {
    dialogData:Array<dialogDataType>
    messageData:Array<messageDataType>
    dispatch:(action:ActionTypes)=>void
    NewTextMessage:string
}
type dialogDataType={
    name:string
    id:number
}
type messageDataType={
    message:string
}

const Dialogs = (props: DialogsPropsType) => {
    let DialogElement = props.dialogData.map(d=><DialogItem name={d.name} id={d.id}/>)
    let MessageElement= props.messageData.map(m=><Message message={m.message}/>)
    let addMessage = () => {
        props.dispatch(addMessageAC(props.NewTextMessage))

    }
    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.target.value
props.dispatch(updateMessageAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElement}
            </div>
            <div className={s.message}>
                {MessageElement}
                <textarea  value={props.NewTextMessage} onChange={newTextChangeHandler}></textarea>
                <button onClick={addMessage}>new post</button>
            </div>
        </div>
    )
}


export default Dialogs;
