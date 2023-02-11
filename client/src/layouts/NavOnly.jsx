import React from "react";
import { Outlet } from "@pankod/refine-react-router-v6";
import Sidebar from "../components/Sidebar";
import Other from "../components/Other";

const NavOnly = () => {
  return (
    <>
      <div className="layout_container">
        <Sidebar />
        <div className="main_container">
          <Outlet />
        </div>
        <Other />
      </div>
    </>
  );
};

export default NavOnly;
