import React from "react";
import { useParams } from "@pankod/refine-react-router-v6";
import styles from "../css/components/SpecificPost.module.css";
import { IconButton } from "@pankod/refine-mui";
import { BiArrowBack } from "react-icons/bi";
const SpecificPost = () => {
  const { id } = useParams();
  console.log(id);
  const GoBack = () =>{
   window.history.back();
  }
  return (
    <>
      <div className={styles.specificpost_container}>
        <div className={styles.header_post}>
          <IconButton
            sx={{
              width: "38px",
              height: "38px",
            }}
            onClick={GoBack}
          >
            <BiArrowBack />
          </IconButton>
          <span className={styles.heading}>Devit</span>
        </div>
      </div>
    </>
  );
};

export default SpecificPost;
