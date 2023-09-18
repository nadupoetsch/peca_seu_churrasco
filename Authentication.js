import React, {createContext,  useState} from 'react';

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({children}) => {
  const [user, setUser] = useState("Bernardo");

  return (
    <AuthenticationContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticationContext.Provider>
  );
};