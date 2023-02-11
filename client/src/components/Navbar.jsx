import React from "react";
import styles from "../css/components/Navbar.module.css";
import { SiCodemagic } from "react-icons/si";
import { Button } from "@pankod/refine-mui";

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
        <div className={styles.right}>
          <Button
            variant="text"
            size="small"
            sx={{
              color: "var(--text)",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "15px",
              borderRadius: "4px",
              px: "1rem",
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              color: "var(--light-text)",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "15px",
              borderRadius: "4px",
              backgroundColor: "var(--text)",
              //hover effect in mui
              "&:hover": {
                backgroundColor: "var(--text)",
              },
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
