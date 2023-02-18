import React from "react";
import Devit from "../components/Devit";
import PageTop from "../components/PageTop";
import Post from "../components/Post";
import styles from "../css/pages/Home.module.css";

const Home = () => {
  return (
    <>
      <PageTop label="Home" />
      <div className={styles.home_container}>
        <Devit/>

      </div>
    </>
  );
};

export default Home;
