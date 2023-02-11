import React from "react";
import styles from "../css/components/Sidebar.module.css";
import { Button, IconButton } from "@pankod/refine-mui";
import { SiCodemagic } from "react-icons/si";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { BsLaptop, BsLaptopFill } from "react-icons/bs";
import { MdOutlineLibraryBooks, MdLibraryBooks } from "react-icons/md";
// import { HiUserCircle, HiOutlineUserCircle } from "react-icons/hi";
import { IoSettingsSharp, IoSettingsOutline } from "react-icons/io5";
import { NavLink, useLocation } from "@pankod/refine-react-router-v6";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const links = [
    {
      name: "Home",
      icon2: <AiFillHome />,
      icon1: <AiOutlineHome />,
      link: "/app",
    },
    {
      name: "Discover",
      icon1: <FiGlobe />,
      icon2: <FiGlobe />,
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
      link: "/blogs",
    },
    // {
    //   name: "Profile",
    //   icon1: <HiUserCircle />,
    //   icon2: <HiOutlineUserCircle />,
    //   links: "/profile",
    // },
    {
      name: "Api Key",
      icon2: <IoSettingsSharp />,
      icon1: <IoSettingsOutline />,
      link: "/api",
    },
  ];
  return (
    <>
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_wrapper}>
          <div className={styles.logo}>
            <IconButton
              aria-label="logo"
              sx={{
                width: "50px",
                height: "50px",
                fontSize: "30px",
                marginLeft: "10px",
                mt: "5px",
              }}
            >
              <SiCodemagic />
            </IconButton>
          </div>
          {links.map((link) => (
            <NavLink
              className={
                pathname === link.link ? styles.link_active : styles.link
              }
              to={link.link}
            >
              <div className={styles.link_logo}>
                {pathname === link.link ? link.icon2 : link.icon1}
              </div>
              <div
                className={
                  pathname === link.link
                    ? styles.link_name_active
                    : styles.link_name
                }
              >
                {link.name}
              </div>
            </NavLink>
          ))}
          <Button
            variant="contained"
            sx={{
              borderRadius: "100vw",
              color: "text.normal",
              fontSize: "1.2rem",
              fontFamily: "Poppins",
              textTransform: "none",
              py: "8px",
              width: "90%",
            }}
          >
            Devit
          </Button>
          <div className={styles.profile_handle}>
            <div className={styles.profile}>
              <img
                src="/pic.jpg"
                alt="profile"
                className={styles.profile_img}
              />
            </div>
            <div className={styles.name_con}>
                <div className={styles.name}>Utsav Bhattarai</div>
                <div className={styles.username}>@utsav</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
