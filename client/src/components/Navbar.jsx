import React from "react";
import styles from "../css/components/Navbar.module.css";
import {SiCodemagic} from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_con}>
        <div className={styles.left}>
          <div className={styles.logo_con}>
            <span className={styles.logo}>
              <SiCodemagic />
            </span>
            DevHub
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
};

export default Navbar;
