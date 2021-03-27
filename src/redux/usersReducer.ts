import {ActionTypes} from "./store";

export type UserPageType = {
    id: number
    name: string
    followed: boolean
    photos: PhotosType
    location: LocType
}
type PhotosType = {
    small: string
}
type LocType = {
    countryName: string
    cityName: string
}
export type InitialStateType = {
    users: Array<UserPageType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const initialState: InitialStateType = {
    users: [],
    pageSize: 4,
    totalUserCount:0,
    currentPage: 1
}

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [ ...action.users]
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUserCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        default:
            return state
    }

}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId

    } as const
}
export const setUsersAC = (users: Array<UserPageType>) => {
    return {
        type:SET_USERS,
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type:SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setTotalUserCountAC = (totalCount: number) => {
    return {
        type:SET_TOTAL_USER_COUNT,
        totalCount
    } as const
}
export default usersReducer