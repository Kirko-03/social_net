import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogData:Array<dialogDataType>
    messageData:Array<messageDataType>
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElement}
            </div>
            <div className={s.message}>
                {MessageElement}
            </div>
        </div>
    )
}


export default Dialogs;
