import React, { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ContextProvider.Provider
        value={{
          t: [theme, setTheme],
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
