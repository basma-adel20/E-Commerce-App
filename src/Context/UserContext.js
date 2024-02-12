import { createContext, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
    
    const [userToken, setUserToken] = useState(null); {/** we need after login to set the value of the token from local storage to this variable */}
        

  return  <UserContext.Provider value={{userToken ,setUserToken}}>
        {props.children}
    </UserContext.Provider>

}