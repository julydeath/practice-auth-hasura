import { createContext } from "react";

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  return <UserAuthContext.Provider>{children}</UserAuthContext.Provider>;
};
