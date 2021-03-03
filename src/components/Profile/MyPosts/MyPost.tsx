import React from 'react';
import b from './MyPost.module.css';
import Post from './Post/Post'
import { addPostAC, updateAddPostAC} from "../../../redux/profileReducer";
import { ActionTypes } from '../../../redux/state';
import { ChangeEvent } from 'react';




type ArrayProfile = {
    message: string
    like: number
}

type MyPostProps = {
    postData:Array<ArrayProfile>
    NewTextPost:string
    dispatch:(action:ActionTypes)=>void

}
const MyPost = (props:MyPostProps) =>{


const addPosts = () =>{
        props.dispatch(addPostAC(props.NewTextPost))
}

let PostElem=props.postData.map(p=> <Post message={p.message} like={p.like}/>)

    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
      props.dispatch(updateAddPostAC(e))

    }
    return(
        <div className={b.postsBlock}>
 <div className={b.item}>
   <a>My post</a>
    </div>
    <textarea  value={props.NewTextPost} onChange={newTextChangeHandler}/>
  <button onClick={addPosts}  >add post</button>
            {PostElem}
</div>
    )
}
export default MyPost;