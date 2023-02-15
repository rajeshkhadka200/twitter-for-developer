import { Avatar } from "@pankod/refine-mui";
import React from "react";
import SearchBox from "../components/SearchBox";
import styles from "../css/pages/Discover.module.css";
import Post from "../components/Post";

const Discover = () => {
  const user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className={styles.search_wrapper}>
        <SearchBox />
      </div>
      <div className={styles.user_list}>
        {user.map((user) => (
          <div className={styles.user}>
            <Avatar
              src="./pic.jpg"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid var(--primary)",
              }}
            />
            <span className={styles.user_info}>Utsav</span>
          </div>
        ))}
      </div>
      <Post/>
      <Post/>
    </>
  );
};

export default Discover;
