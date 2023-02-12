import React from "react";
import style from "../css/components/ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <>
      <header className={style.header_profile}>
        <img className={style.wave} src="/assets/wave.svg" alt="header img" />
        <div className={style.profile_details}>
          <img src="/assets/profile-img.jpg" alt="profile_pic" />
          <h3>Rajesh Khadka</h3>
          <p className={style.username}>@rajeshkhadka200</p>
          <p className={style.bio}>
            Trying to learn Full stack development in my own!
          </p>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
