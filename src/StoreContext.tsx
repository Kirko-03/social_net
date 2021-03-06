import React, { ReactNode } from "react"
import {ReduxStoreType} from "./redux/redux-store";
const StoreContext = React.createContext({} as ReduxStoreType)

type ProviderPropsType={
    store:ReduxStoreType
    children:ReactNode
}

export const Provider = (props:ProviderPropsType) => {
    return(
    <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>)

}

export default StoreContext