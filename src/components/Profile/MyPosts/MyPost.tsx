import React from 'react';
import b from './MyPost.module.css';
import Post from './Post/Post'
import { addPostAC, updateAddPostAC} from "../../../redux/profileReducer";
import {ActionTypes, profilePageType} from '../../../redux/store';
import { ChangeEvent } from 'react';
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostProps = {
    profilePage:profilePageType
    addPosts:()=>void
    newTextChangeHandler:(body:string)=>void

}
const MyPost = (props:MyPostProps) =>{
    let profilePage = props.profilePage

const addPosts = () =>{
        props.addPosts()
}
let NewTextPost =profilePage.NewTextPost

let PostElem=profilePage.posts.map(p=> <Post message={p.message} like={p.like}/>)

    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.target.value
      props.newTextChangeHandler(body)

    }
    return(
        <div className={b.postsBlock}>
 <div className={b.item}>
   <a>My post</a>
    </div>
    <textarea placeholder={"Введите что-нибудь"}  value={NewTextPost} onChange={newTextChangeHandler}/>
  <button onClick={addPosts}  >add post</button>
            {PostElem}
</div>
    )
}
export default MyPost;