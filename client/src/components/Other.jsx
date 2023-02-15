import React from "react";
import styles from "../css/components/Other.module.css";
import SearchBox from "./SearchBox";
import { useLocation } from "@pankod/refine-react-router-v6";
const Other = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <div className={styles.other_container}>
        {path !== "/discover" && <SearchBox />}
        <div className={styles.trends_container}>
          <span className={styles.trend_title}>Trends for you</span>
          <div className={styles.trend}>
            <span className={styles.trend_name}>#dev</span>
            <span className={styles.trend_count}>2k devits</span>
          </div>
          <div className={styles.trend}>
            <span className={styles.trend_name}>#opensource</span>
            <span className={styles.trend_count}>1.2k devits</span>
          </div>
          <div className={styles.trend}>
            <span className={styles.trend_name}>#devhub</span>
            <span className={styles.trend_count}>100k devits</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
