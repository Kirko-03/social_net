import React from 'react';
import {Link} from 'react-router-dom';

import s from './ProfileItem.module.css';
import userPhoto from "../../images.jpg";
import { UserProfileType } from '../../redux/profileReducer';
import Preloader from '../preloader/preloader';


type ProfileType = {
    userProfile: UserProfileType | null
}


const ProfileItem = (props: ProfileType) => {
    if (props.userProfile === null) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
                />
            </div>
            <div className={s.up}>
                {
                    <img src={props.userProfile?.photos.large ? props.userProfile?.photos.large : userPhoto}/>
                }
                <div>Full name:{props.userProfile?.fullName}</div>
                <div>About me:{props.userProfile?.aboutMe}</div>
                <div>
                    Contacts:
                    {props.userProfile?.contacts.facebook ?
                        <div>facebook:<Link to={"/"}>{props.userProfile?.contacts.facebook}</Link></div> : null
                    }
                    {props.userProfile?.contacts.github ?
                        <div>github:<Link to={"/"}>{props.userProfile?.contacts.github}</Link></div> : null
                    }
                    {props.userProfile?.contacts.instagram ?
                        <div>instagram:<Link to={"/"}>{props.userProfile?.contacts.instagram}</Link></div> : null
                    }
                    {props.userProfile?.contacts.mainLink ?
                        <div>mainLink:<Link to={"/"}>{props.userProfile?.contacts.mainLink}</Link></div> : null
                    }
                    {props.userProfile?.contacts.twitter ?
                        <div>twitter:<Link to={"/"}>{props.userProfile?.contacts.twitter}</Link></div> : null
                    }
                    {props.userProfile?.contacts.vk ?
                        <div>vk:<Link to={"/"}>{props.userProfile?.contacts.vk}</Link></div> : null
                    }
                    {props.userProfile?.contacts.youtube ?
                        <div>youtube:<Link to={"/"}>{props.userProfile?.contacts.youtube}</Link></div> : null
                    }
                    <div>User Id:{props.userProfile?.userId}</div>
                    {props.userProfile?.lookingForAJobDescription ?
                        <div>Looking for A job description:{props.userProfile?.lookingForAJobDescription}</div> : null
                    }
                </div>
            </div>
        </div>
    )
}
export default ProfileItem;