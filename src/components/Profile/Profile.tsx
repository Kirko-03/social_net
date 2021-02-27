import React from 'react';
import b from './Profile.module.css';
import MyPosts from './MyPosts/MyPost';
import ProfileItem from "./ProfileItem/ProfileItem";
import {ActionTypes, PostType} from "../../redux/state";

type ProfileProps = {
    postData: Array<PostDataType>
    NewTextPost:string
    dispatch:(action:ActionTypes)=>void

}
type PostDataType = {
  message: string
     like: number
}

const Profile = (props:ProfileProps) =>{
    return(
<div className={b.body}>
  <ProfileItem/>
  <MyPosts  postData={props.postData}
            dispatch={props.dispatch}
            NewTextPost={props.NewTextPost}/>
</div>
    )
}
export default Profile;