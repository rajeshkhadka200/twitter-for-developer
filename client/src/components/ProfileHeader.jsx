import React, { useContext } from "react";
import { ContextProvider } from "../config/Context";
import style from "../css/components/ProfileHeader.module.css";

const ProfileHeader = () => {
  const { userDetails } = useContext(ContextProvider);
  const [user, setuser] = userDetails;

  // generate name from firstname and lastname
  const name = user?.firstname + " " + user?.lastname;

  return (
    <>
      <header className={style.header_profile}>
        <img className={style.wave} src="/assets/wave.svg" alt="header img" />
        <div className={style.profile_details}>
          <img src={user?.avatar} alt="profile_pic" />
          <h3>{name}</h3>
          <p className={style.username}>@{user?.username}</p>
          <p className={style.bio}>{user?.bio}</p>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
