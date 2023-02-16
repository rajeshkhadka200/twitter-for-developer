import { Avatar } from "@pankod/refine-mui";
import React from "react";
import { MdVerified } from "react-icons/md";
import styles from "../css/components/Comment.module.css";

const Comment = () => {
  return (
    <>
      <div className={styles.comment_container}>
        <div className={styles.left}>
          <Avatar
            src="./pic.jpg"
            sx={{
              width: "45px",
              height: "45px",
            }}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <span className={styles.info_name}>Utsav bhattarai</span>
            <span className={styles.green_tick}>
              <MdVerified />
            </span>
            <span className={styles.username}>@utsavdev</span>
            <span className={styles.dot}></span>
            <span className={styles.time}>1m</span>
          </div>
          <div className={styles.comment_text}>Hello, Nice to meet you!</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
