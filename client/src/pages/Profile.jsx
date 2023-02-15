import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import Post from "../components/Post";

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <div
        style={{
          marginTop: "-20px",
        }}
      >
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Profile;
