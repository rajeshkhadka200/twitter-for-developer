import React from "react";
import style from "../css/components/BlogCard.module.css";
import { BsBook } from "react-icons/bs";
import { SiJsonwebtokens } from "react-icons/si";
const BlogCard = () => {
  return (
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
            <span>
              <BsBook /> 11 min
            </span>
            <span>
              <SiJsonwebtokens />
              Hashnode
            </span>
          </div>
        </div>

        <div className={style.right}>
          <img src="/assets/blog-cover.avif" alt="blog_cover_img" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
