import React from "react";
import styles from "../css/pages/Hero.module.css";
import { Button } from "@pankod/refine-mui";
import { BsArrowRight, BsMicFill, BsFillBookFill } from "react-icons/bs";
import { FaPencilAlt, FaUserAstronaut } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { RiOpenSourceFill } from "react-icons/ri";
const Hero = () => {
  const features = [
    {
      icon: <FaPencilAlt />,
      title: "Post Devit(Dev Post)",
      desc: "You can post your devit(Dev Post),code snippets,imagesetc.",
    },
    {
      icon: <BiGlobe />,
      title: "Discover Hackathon",
      desc: "You can view and join popular hackathons.",
    },
    {
      icon: <BsMicFill />,
      title: "Connect in Voice Channels",
      desc: "You can connect with other developers in voice channels.",
    },
    {
      icon: <BsFillBookFill />,
      title: "Get Popular blogs post",
      desc: "You can get popular blogs post from dev.to and hashnode",
    },
    {
      icon: <FaUserAstronaut />,
      title: "User friendly UI",
      desc: "Devhub has a user friendly UI which is easy to use.",
    },
    {
      icon: <BsArrowRight />,
      title: "Open Source",
      desc: "Devhub is an open source project and you can contribute to it.",
    },
  ];
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.center_con}>
          <span className={styles.top_text}>OPEN SOURCE, FREE DEV SPEECH</span>
          <div className={styles.center_text}>
            A Common space where{" "}
            <span className={styles.gradient}>developers</span> Connect,
            Collaborate and Grow.
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
            endIcon={<BsArrowRight size={"28"} />}
          >
            Let's Connect
          </Button>
        </div>
      </div>
      <div className={styles.mid_con}>
        <div className={styles.box}>
          <div className={styles.img_con}></div>
        </div>
      </div>
      <div className={styles.bottom_con}>
        <div className={styles.text_con}>
          <span className={styles.heading}>
            The features <br />
            packed with <span className={styles.gradient}>DevHub</span>
          </span>
          <span className={styles.label}>
            DevHub has all the legit features that helps the developer to
            unleash their potential.
          </span>
        </div>
        <div className={styles.features_wrapper}>
          {features.map((feature) => (
            <div className={styles.feature_box}>
              <span className={styles.feature_icon}>{feature.icon}</span>
              <span className={styles.feature_title}>{feature.title}</span>
              <span className={styles.feature_desc}>{feature.desc}</span>
            </div>
          ))}
          {/* <div className={styles.feature_box}>
            <FaPencilAlt color="#fff" size={"26"} />
            <span className={styles.feature_title}>Post Devit(Dev Post)</span>
            <span className={styles.feature_desc}>
              You can post your devit,code snippets,images etc
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
