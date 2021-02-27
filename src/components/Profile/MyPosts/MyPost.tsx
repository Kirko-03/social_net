import React from 'react';
import b from './MyPost.module.css';
import Post from './Post/Post'
import {ActionTypes, addPostAC, updateAddPostAC} from "../../../redux/state";




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

    let newPost = React.createRef<HTMLTextAreaElement>()

const addPosts = () =>{
        props.dispatch(addPostAC(props.NewTextPost))
}

let PostElem=props.postData.map(p=> <Post message={p.message} like={p.like}/>)

    const newTextChangeHandler = () =>{
        let action
       let newText = newPost.current?.value;
       if(newText)
            action = (updateAddPostAC(newText))
        if(action)
       props.dispatch(action)
    }
    return(
        <div className={b.postsBlock}>
 <div className={b.item}>
   <a>My post</a>
    </div>
    <textarea ref={newPost} value={props.NewTextPost} onChange={newTextChangeHandler}/>
  <button onClick={addPosts}  >add post</button>
            {PostElem}
</div>
    )
}
export default MyPost;