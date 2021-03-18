import {ActionTypes} from "./store";

export type UserPageType = {
    id:number
    name:string
    followed:boolean
    image:string
    location:LocType
}
 type LocType = {
    countryName:string
    cityName:string
}
export type InitialStateType = {
    users:Array<UserPageType>
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

const initialState:InitialStateType =  {
    users: []
}

const usersReducer = (state:InitialStateType=initialState,action:ActionTypes):InitialStateType => {
    switch(action.type){
        case FOLLOW:
           return {...state,users:state.users.map(u=>{
               if(u.id === action.userId) {
                   return {...u, followed: true}
               }
               return u
               })}
        case UNFOLLOW:
            return {...state,users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u,followed:false}
                    }
                    return u
                })}
        case SET_USERS:
return {...state,
    users:[...state.users,...action.users]}
        default:
            return state
    }

}

export const followAC = (userId:number) =>{
    return {
        type: FOLLOW,
        userId
    }as const
}
export const unfollowAC = (userId:number) =>{
    return {
        type: UNFOLLOW,
        userId

    }as const
}
export const setUsersAC = (users:Array<UserPageType>) =>{
    return {
        type: SET_USERS,
        users
    }as const
}
export default usersReducer