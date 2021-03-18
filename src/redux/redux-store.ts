import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage:usersReducer
})

export type RootReduxState = ReturnType<typeof reducers>

let store = createStore(reducers)

export type  ReduxStoreType = typeof store

export default store