import React, { useEffect } from "react";
import { Outlet } from "@pankod/refine-react-router-v6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NavFoot = () => {
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      window.location.href = "/app";
    }
  }, [token]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavFoot;
