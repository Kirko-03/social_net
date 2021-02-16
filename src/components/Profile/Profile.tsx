import React from 'react';
import b from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileItem from "./ProfileItem/ProfileItem";

type ProfileProps = {
    postData: Array<PostDataType>
}
type PostDataType = {
  message: string
     like: number
}

const Profile = (props:ProfileProps) =>{
    return(
<div className={b.body}>
  <ProfileItem/>
  <MyPosts  postData={props.postData}/>
</div>
    )
}
export default Profile;