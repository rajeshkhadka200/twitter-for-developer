import React, { createContext, useEffect, useState } from "react";
import provider from "./axios";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  let token = localStorage.getItem("token");
  console.log(token);
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState();
  const [alldevits, setAllDevits] = useState([]);

  // fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await provider.get(`/user/profile/${token}`);
        console.log("User:" + res.data);
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      fetchUser();
    }
  }, []);

  

  console.log(alldevits);
  return (
    <>
      <ContextProvider.Provider
        value={{
          t: [theme, setTheme],
          userDetails: [user, setUser],
          devits:[alldevits,setAllDevits]
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
