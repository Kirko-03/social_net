
import {ActionTypes, PostType, profilePageType} from "./store";

let initialState = {posts: [{message: "Hi", like: 1},
    {message: "Whats up?", like: 1},
    {message: "Learn Pituhon(((", like: -13},
    {message: "LOSEEER", like: 187},
    {message: "Соси пинчер", like: 100}],
    NewTextPost: "it-camasutra"}

const ADDPOST = "ADD-POST";
const UPDATEADDPOST = "UPDATE-ADD-POST";
const profileReducer = (store:profilePageType=initialState,action:ActionTypes)=> {

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
export const updateAddPostAC = (body:string) => {
    return{
        type:UPDATEADDPOST,
        newText:body
    }as const

}
export default profileReducer