import {ActionTypes, PostType, profilePageType} from "./store";

let initialState = {
    posts: [{message: "Hi", like: 1},
        {message: "Whats up?", like: 1},
        {message: "Learn Pituhon(((", like: -13},
        {message: "LOSEEER", like: 187},
        {message: "Соси пинчер", like: 100}],
    NewTextPost: "it-camasutra"
}

const ADDPOST = "ADD-POST";
const UPDATEADDPOST = "UPDATE-ADD-POST";
const profileReducer = (state: profilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADDPOST: {
            let newPost: PostType = {
                message: state.NewTextPost,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                NewTextPost: ""
            }
        }
        case   UPDATEADDPOST: {
            return {
                ...state,
                NewTextPost: action.newText
            }
        }
        default :
            return state
    }
}

export const addPostAC = () => {
    return {
        type: ADDPOST
    } as const
}
export const updateAddPostAC = (body: string) => {
    return {
        type: UPDATEADDPOST,
        newText: body
    } as const

}
export default profileReducer