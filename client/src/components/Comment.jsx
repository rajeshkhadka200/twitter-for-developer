import { Avatar } from "@pankod/refine-mui";
import React from "react";
import { MdVerified } from "react-icons/md";
import styles from "../css/components/Comment.module.css";

const Comment = ({ data }) => {
  // short array with latest timestam
  const sortedComments = data.comments.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  return (
    <>
      {sortedComments.map((comment, i) => {
        const { name, avatar, content, timestamp, actual_date } = comment;
        return (
          <div className={styles.comment_container}>
            <div className={styles.left}>
              <Avatar
                src={avatar}
                sx={{
                  width: "45px",
                  height: "45px",
                }}
              />
            </div>
            <div className={styles.right}>
              <div className={styles.info}>
                <span className={styles.info_name}>{name}</span>
                <span className={styles.green_tick}>
                  <MdVerified />
                </span>
                <span className={styles.dot}></span>
                <span className={styles.time}>{actual_date}</span>
              </div>
              <div className={styles.comment_text}>{content}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comment;
