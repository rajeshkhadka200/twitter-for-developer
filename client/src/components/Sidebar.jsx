import React from "react";
import styles from "../css/components/Sidebar.module.css";
import { IconButton } from "@pankod/refine-mui";
import { SiCodemagic } from "react-icons/si";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { BsLaptop, BsLaptopFill } from "react-icons/bs";
import { MdOutlineLibraryBooks, MdLibraryBooks } from "react-icons/md";
// import { HiUserCircle, HiOutlineUserCircle } from "react-icons/hi";
import { IoSettingsSharp, IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const links = [
    {
      name: "Home",
      icon1: <AiFillHome />,
      icon2: <AiOutlineHome />,
      link: "/app",
    },
    {
      name: "Discover",
      icon: <FiGlobe />,
      link: "/discover",
    },
    {
      name: "Hackathons",
      icon1: <BsLaptop />,
      icon2: <BsLaptopFill />,
      link: "/hackathons",
    },
    {
      name: "Blogs",
      icon1: <MdOutlineLibraryBooks />,
      icon2: <MdLibraryBooks />,
      links: "/blogs",
    },
    {
      name: "Profile",
      icon1: <HiUserCircle />,
      icon2: <HiOutlineUserCircle />,
      links: "/profile",
    },
    {
      name: "Api Key",
      icon1: <IoSettingsSharp />,
      icon2: <IoSettingsOutline />,
      links: "/api",
    },
  ];
  return (
    <>
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_wrapper}>
          <div className={styles.logo}>
            <IconButton
              aria-label="logo"
              sx={{ width: "50px", height: "50px", fontSize: "30px" }}
            >
              <SiCodemagic />
            </IconButton>
          </div>
          <div className={styles.link}>
            <div className={styles.link_logo}>
              <AiFillHome />
            </div>
            <div className={styles.link_name}>Home</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
