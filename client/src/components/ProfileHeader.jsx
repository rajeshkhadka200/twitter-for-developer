import { Button } from "@pankod/refine-mui";
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
          <div className={style.button_con}>
            <Button
              size="medium"
              variant="contained"
              sx={{
                color: "var(--text)",
                fontFamily: "Poppins",
                textTransform: "none",
                // fontSize: "16px",
                // padding: "10px 15px",
                backgroundColor: "#344454",
                "&:hover": {
                  backgroundColor: "#344454",
                },
              }}
            >
              Edit Profile
            </Button>
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              size="small"
              variant="contained"
              sx={{
                color: "var(--text)",
                fontFamily: "Poppins",
                textTransform: "none",
                backgroundColor: "var(--primary)",
                fontSize: "16px",
                padding: "5px 15px",
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
