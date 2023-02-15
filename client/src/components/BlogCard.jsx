import React from "react";
import style from "../css/components/BlogCard.module.css";
import { BsBook } from "react-icons/bs";
import { SiJsonwebtokens } from "react-icons/si";
import { Tooltip } from "@pankod/refine-mui";
const BlogCard = () => {
  return (
    <>
      <a
        target={"_blank"}
        href="https://blog.rajeshkhadka.info.np/meet-my-latest-project-realtime-code-collaboration-tool"
      >
        <div className={style.blog_card}>
          <div className={style.card_header}>
            <div className={style.profile_img_left}>
              <img src="/assets/profile-img.jpg" alt="profile" />
            </div>
            <div className={style.right_details}>
              <p className={style.name}>Rajesh Khadka</p>
              <p className={style.date}>Feb 16, 2023</p>
            </div>
          </div>
          <div className={style.card_body}>
            <div className={style.left}>
              <p className={style.tittle}>
                How to write a GitHub action in Rust with python and php
              </p>
              <div className={style.footer_desc}>
                <Tooltip
                  title="Read time"
                  sx={{
                    width: "33px",
                    height: "33px",
                    color: "primary.main",
                    marginTop: "-100px",
                  }}
                >
                  <span>
                    <BsBook /> 11 min
                  </span>
                </Tooltip>

                <Tooltip
                  title="Published on"
                  sx={{
                    width: "33px",
                    height: "33px",
                    color: "primary.main",
                    marginTop: "-100px",
                  }}
                >
                  <span>
                    <SiJsonwebtokens />
                    Hashnode
                  </span>
                </Tooltip>
              </div>
            </div>

            <div className={style.right}>
              <img src="/assets/blog-cover.avif" alt="blog_cover_img" />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
