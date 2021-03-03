import { ChangeEvent } from "react";
import {ActionTypes, PostType, profilePageType} from "./state";



const ADDPOST = "ADD-POST";
const UPDATEADDPOST = "UPDATE-ADD-POST";
const profileReducer = (store:profilePageType,action:ActionTypes)=> {

    switch(action.type) {
        case ADDPOST:
        let newPost: PostType = {
            message: action.postText,
            like: 0
        };
        store.posts.push(newPost);
            store.NewTextPost = ""
return store
        case   UPDATEADDPOST:
        store.NewTextPost = action.newText

            return store
        default :return store
    }
}

export const addPostAC= (postText:string) => {
    return {
        type: ADDPOST,
        postText: postText
    }as const
}
export const updateAddPostAC = (e:ChangeEvent<HTMLTextAreaElement>) => {
    return{
        type:UPDATEADDPOST,
        newText:e.currentTarget.value
    }as const

}
export default profileReducer