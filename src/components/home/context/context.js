import React, { createContext, useReducer } from "react";
import { initialState, AppReducer } from "./reducer";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [state, AppContextDispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ state, AppContextDispatch }}>
            {children}
        </AppContext.Provider>
    )
};