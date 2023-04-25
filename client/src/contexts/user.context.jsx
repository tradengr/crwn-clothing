import { createContext, useEffect, useState } from "react";

import { httpGetUser } from "../api/serverAPI";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    httpGetUser().then(res => setCurrentUser(res.data));
  }, [])

  const value = { currentUser, setCurrentUser };

  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}