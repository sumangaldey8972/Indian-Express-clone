import { createContext, useState } from "react";

export const AuthContext = createContext();

export const IsAuthContextProvide=( {children} )=>{

    const [auth, setAuth] = useState(true)

    const handleOnclick=()=>{
        setAuth(false);
    }

    return <AuthContext.Provider value={{auth, handleOnclick}} >
        {children}
    </AuthContext.Provider>
}