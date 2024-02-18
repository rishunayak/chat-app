import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuthContext=()=>
{
    return useContext(AuthContext)
}

export const AuthContextProivder=({children})=>
{
    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("userInfo")) || null)
    
    return <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>
}