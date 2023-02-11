import React from "react";
import styles from "../css/pages/Hero.module.css";
import { Button } from "@pankod/refine-mui";
import {BsArrowRight} from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.center_con}>
          <span className={styles.top_text}>OPEN SOURCE, FREE DEV SPEECH</span>
          <div className={styles.center_text}>
            A Common space where developers Connect, Collaborate and Grow.
          </div>
          <div className={styles.bottom_text}>
            A Platform for Developers to{" "}
            <span className={styles.glow}>`Share Insights’</span>, Stay
            Up-to-Date on <span className={styles.glow}>`Tech News`</span>,
            Discover <span className={styles.glow}>`Hackathons`</span>, Connect
            in <span className={styles.glow}>`Voice Channels`</span>, and Much
            More.
          </div>
          <Button
            size="large"
            variant="contained"
            sx={{
              color: "var(--text)",
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "none",
              backgroundColor: "var(--light-primary)",
              fontSize: "1.3rem",
              mt: "3rem",
              "&:hover": {
                backgroundColor: "var(--primary)",
              },
            }}
            endIcon={<BsArrowRight />}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </>
    );
  };

export default Hero;
