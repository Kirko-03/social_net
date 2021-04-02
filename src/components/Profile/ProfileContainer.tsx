import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {setUserProfile, UserProfileType} from "../../redux/profileReducer";
import { RootReduxState } from "../../redux/redux-store";


type MapStateToPropsType = {
    userProfile: UserProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfile: UserProfileType | null) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileContainerComponent extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then
        (response => {
            this.props.setUserProfile(response.data)
        })

    }

    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}


export const ProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {setUserProfile})(ProfileContainerComponent)
