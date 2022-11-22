import { createContext,useState,useEffect } from "react"
export const userContext = createContext();



export const UserState = (props) => {
  
    const [user, setuser] = useState();
  






    return (
        <userContext.Provider value={{user ,setuser}}>
            {props.children}
        </userContext.Provider>
    )



}