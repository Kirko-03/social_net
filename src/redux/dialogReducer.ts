import {ActionTypes, dialogsPageType, MessageType, StoreType} from "./state";
const UPDATEMESSAGE = "UPDATE-MESSAGE";
const ADDMESSAGE = "ADDMESSAGE"

const dialogReducer = (store:dialogsPageType,action:ActionTypes) => {
switch(action.type){
    case UPDATEMESSAGE:
        store.NewTextMessage = action.body

        return store
    case ADDMESSAGE:
        const  newMessage:MessageType = {
            message:action.messageText
        }
        store.messages.push(newMessage);
        store.NewTextMessage = ""
     return store
    default:
        return store
    }

}

export const updateMessageAC = (body:string) =>{
    return {
        type: UPDATEMESSAGE,
        body:body
    }as const
}
export const addMessageAC = (messageText:string) =>{
    return {
        type: ADDMESSAGE,
        messageText:messageText
    }as const
}
export default dialogReducer