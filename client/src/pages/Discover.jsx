import { Avatar, Badge } from "@pankod/refine-mui";
import React, { useEffect } from "react";
import SearchBox from "../components/SearchBox";
import styles from "../css/pages/Discover.module.css";
import Post from "../components/Post";
import Loader from "../components/Loader";
import { MdVerified, MdDelete } from "react-icons/md";

const Discover = () => {
  const [search, setSearch] = React.useState("");
  const user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //get the search query

  const query = new URLSearchParams(window.location.search);
  const q = query.get("q");

  useEffect(() => {
    if (q) {
      setSearch(q);
    }
  }, [q]);

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
        {user.map((user) => (
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
                src="./pic.jpg"
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "2px solid var(--primary)",
                }}
              />
            </Badge>
            <span className={styles.user_info}>Utsav</span>
          </div>
        ))}
      </div>
      {/* <Post />
      <Post /> */}
      <Loader height="50vh"/>
    </>
  );
};

export default Discover;
