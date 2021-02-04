let rerenderEntireTree = () => {
    console.log('State changed')
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    name: string
    id: number
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type Sidebar = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Sidebar
}

const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post', likesCount: 25},
            {id: 3, message: 'Blabla', likesCount: 25},
            {id: 4, message: 'Dada', likesCount: 25}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {name: 'Dimych', id: 1},
            {name: 'Andrey', id: 2},
            {name: 'Sveta', id: 3},
            {name: 'Sasha', id: 4},
            {name: 'Victor', id: 5},
            {name: 'Valera', id: 6}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is yuor it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}
export const addPost = () => {
    let newPost: PostType = {
        id: 5, message: state.profilePage.newPostText, likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree();

}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: ()=> void) => {
        rerenderEntireTree = observer
}

export default state