import React from 'react';
import b from './Profile.module.css';

import ProfileItem from "./ProfileItem/ProfileItem";
import { ReduxStoreType } from '../../redux/redux-store';
import MyPostContainer from "./MyPosts/MyPostContainer";

type ProfileProps = {
  store:ReduxStoreType

}

const Profile = (props: ProfileProps) => {

    return (
        <div className={b.body}>
            <ProfileItem/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}
export default Profile;