export type RootStateType={
    profilePage:profilePageType
        dialogsPage:dialogsPageType
    friendsPage:friendsPageType
}
export type dialogsPageType={
        dialogs:Array<dialogsType>
        messages:Array<messagesType>
    }
export type profilePageType={
    posts:Array<PostType>
    NewTextPost:string

}
export type friendsPageType={
    friends:Array<friendsType>
}
export type dialogsType={
    name:string
    id:number
}
export type messagesType={
    message:string
}
export type PostType= {
    message: string
    like: number

}
export type StoreType = {
    _state:RootStateType
    addPost:(postText:string) => void
    subscribe: (observer: (state: RootStateType) => void)=>void
    _onChange:()=>void
    updateAddPost:(t:string)=>void
    getState:()=>RootStateType
    dispatch:(action:ActionTypes)=>void
}
export type ActionTypes = ReturnType<typeof addPostAC>|ReturnType<typeof updateAddPostAC>

const ADDPOST = "ADD-POST";
const UPDATEADDPOST = "UPDATE-ADD-POST";

export const addPostAC= (postText:string) => {
    return {
        type: ADDPOST,
        postText: postText
    }as const
}
export const updateAddPostAC = (newText:string) => {
       return{
           type:UPDATEADDPOST,
           newText:newText
       }as const

}
export type friendsType = {
    friend:string
}
export let store:StoreType = {
    _onChange(){
        console.log("sdf")
    },
    getState(){
        return this._state;
    },
    addPost (postText:string){
        const  newPost:PostType = {
            message:postText,
            like:0
        }
        this._state.profilePage.posts.push(newPost);
       this._onChange()
    },
    updateAddPost(newText:string){
        this._state.profilePage.NewTextPost = newText
        this._onChange()
    },
    subscribe(observer){
        // @ts-ignore
        this._onChange = observer
    },
    dispatch(action){
        if(action.type === ADDPOST){
            const  newPost:PostType = {
                message:action.postText,
                like:0
            }
            this._state.profilePage.posts.push(newPost);
            this._onChange()
        }else if(action.type === UPDATEADDPOST){
            this._state.profilePage.NewTextPost = action.newText
            this._onChange()

        }
    },
    _state:{
        dialogsPage: {
            dialogs: [
                {name: "Kirik", id: 1},
                {name: "Dimik", id: 2},
                {name: "max", id: 3},
                {name: "dima", id: 4},
                {name: "sasha", id: 5}
            ],
            messages: [
                {message: "hello"},
                {message: "Как дела придурок?)"},
                {message: "Игноришь?"}
            ]
        },
        profilePage: {
            posts: [{message: "Hi", like: 1},
                {message: "Whats up?", like: 1},
                {message: "Learn Pituhon(((", like: -13},
                {message: "LOSEEER", like: 187},
                {message: "Соси пинчер", like: 100}],
            NewTextPost: "it-camasutra"
        },
        friendsPage: {
            friends: [{friend: "Dimas"},
                {friend: "Nastyuha"},
                {friend: "Maks"}
            ],

        }

    },
}



    export default store

