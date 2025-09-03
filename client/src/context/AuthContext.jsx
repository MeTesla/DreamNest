import { createContext, useContext, useState } from "react";

export const userContext = createContext()

export const UserContextProvider = ({children})=>{ // ({children}) non (children) 

    const [user,setUser]= useState(true)
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}