import React from 'react';
import b from './Profile.module.css';

import ProfileItem from "./ProfileItem/ProfileItem";
import MyPostContainer from "./MyPosts/MyPostContainer";




const Profile = () => {

    return (
        <div className={b.body}>
            <ProfileItem/>
            <MyPostContainer />
        </div>
    )
}
export default Profile;