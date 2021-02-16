import React from 'react';
import b from './MyPost.module.css';
import Post from './Post/Post'


type ArrayProfile = {
    message: string
    like: number
}

type MyPostProps = {
    postData:Array<ArrayProfile>
}

const MyPost = (props:MyPostProps) =>{
let PostElem=props.postData.map(p=> <Post message={p.message} like={p.like}/>)
    return(
        <div className={b.postsBlock}>
 <div className={b.item}>
   <a>My post</a> 
    </div>
    <textarea></textarea>
  <button>add post</button>
            {PostElem}
</div>
    )
}
export default MyPost;