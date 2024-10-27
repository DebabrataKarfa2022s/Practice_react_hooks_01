import { createContext } from "react";

export const AppContext= createContext();

export const AppProvider = ({children})=>{

const data = {
    name:"karfa",
    age:22,
    city:"kolkata"
}

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}