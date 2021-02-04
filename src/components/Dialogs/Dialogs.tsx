import React from 'react'
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Message/Messages";
import {DialogsType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElement= props.dialogs.map(d=><DialogItems name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m=><Messages message={m.message}/> )

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addMess = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea ref={newPostElement}>Add messages</textarea>
                <button onClick={addMess}>Add mes</button>
            </div>
        </div>
    )
}

export default Dialogs