import React from "react";
import loginContext from "./context";
import { useState } from "react";

function LoginContextProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <loginContext.Provider value={{ user, setUser }}>
      {children}
    </loginContext.Provider>
  );
}

export default LoginContextProvider;
