import React, { useContext } from "react";
import Devit from "../components/Devit";
import PageTop from "../components/PageTop";
import Post from "../components/Post";
import { ContextProvider } from "../config/Context";
import styles from "../css/pages/Home.module.css";

const Home = () => {
  const { devits } = useContext(ContextProvider);
  const [alldevits, setAllDevits] = devits;

  return (
    <>
      <PageTop label="Home" />
      <div className={styles.home_container}>
        <Devit />
        {sortedDevits.map((data, i) => {
          return <Post data={data} key={i} />;
        })}
      </div>
    </>
  );
};

export default Home;
