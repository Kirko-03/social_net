import {connect} from "react-redux";
import { Dispatch } from "redux";
import Users from "../components/Users/Users";
import {RootReduxState} from "./redux-store";

import {followAC, InitialStateType, setUsersAC, unfollowAC, UserPageType} from "./usersReducer";

type MapStateToPropsType = {
usersPage:InitialStateType
}
type MapDispatchToPropsType = {
follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UserPageType>)=>void
}
export type UsersPropsType = MapStateToPropsType&MapDispatchToPropsType
let mapStateToProps = (state:RootReduxState):MapStateToPropsType => {
    return{
        usersPage:state.usersPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return{
      follow:(userId:number)=>{
          dispatch(followAC(userId))
      },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:Array<UserPageType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{},RootReduxState>(mapStateToProps,mapDispatchToProps)(Users)
