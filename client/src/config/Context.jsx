import React, { createContext, useEffect, useState } from "react";
import provider from "./axios";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  let token = localStorage.getItem("token");
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState();
  const [alldevits, setAllDevits] = useState([]);

  // fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await provider.get(`/user/profile/${token}`);
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      fetchUser();
    }
  }, []);

  // get all devits
  const getAllDevits = async () => {
    try {
      const res = await provider.get("/devit/getall");

      if (res) {
        setAllDevits(res?.data?.devits);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDevits();
  }, []);

  return (
    <>
      <ContextProvider.Provider
        value={{
          t: [theme, setTheme],
          userDetails: [user, setUser],
          devits: [alldevits, setAllDevits],
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
