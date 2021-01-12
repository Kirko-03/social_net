import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
    value: string
}

const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div>
            My posts
            <div>
                <textarea>Abrakadabra</textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {props.value}
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message="It's my first post" likesCount='23' />
            </div>
        </div>
    )
}

export default MyPosts;