import React, { createContext, useContext, useReducer } from "react";
import { staffReducer } from "./reducers/staff-reducer";

const StaffContext = createContext()

const initialState = {
    searchedBy: "",
    isRollMode: false,
    sortBy: {
        firstName: true,
        ascending: true
    },
    students: [],
    rollState: ""
}


export const StaffProvider = ({ children }) => {
    const [state, dispatch] = useReducer(staffReducer, initialState)

    return (
        <StaffContext.Provider value={{ state, dispatch }}>
            {children}
        </StaffContext.Provider>
    )
}


export const useStaff = () => useContext(StaffContext)