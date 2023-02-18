import { Avatar, Badge } from "@pankod/refine-mui";
import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import styles from "../css/pages/Discover.module.css";
import Post from "../components/Post";
import Loader from "../components/Loader";
import { MdVerified, MdDelete } from "react-icons/md";
import provider from "../config/axios.js";
const Discover = () => {
  const [search, setSearch] = React.useState("");
  const user = [1, 2];
  //get the search query

  const query = new URLSearchParams(window.location.search);
  const q = query.get("q");

  useEffect(() => {
    if (q) {
      setSearch(q);
    }
  }, [q]);

  const [allUser, setallUser] = React.useState([]);

  useEffect(() => {
    const fetchallUser = async () => {
      try {
        const res = await provider.get(`/user/getall`);
        setallUser(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchallUser();
  }, []);

  const handleSearch = () => {};
  return (
    <>
      <div className={styles.search_wrapper}>
        <SearchBox
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      <div className={styles.user_list}>
        {allUser.map((user) => (
          <div className={styles.user}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <span className={styles.green_tick}>
                  <MdVerified />
                </span>
              }
            >
              <Avatar
                src={user.avatar}
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "2px solid var(--primary)",
                }}
              />
            </Badge>
            <span className={styles.user_info}>{user.firstname}</span>
          </div>
        ))}
      </div>
      {/* <Post />
      <Post /> */}
      <Loader height="50vh" />
    </>
  );
};

export default Discover;
