import React from "react";
import { useParams } from "@pankod/refine-react-router-v6";
import styles from "../css/components/SpecificPost.module.css";
import { Avatar, Button, IconButton, InputBase } from "@pankod/refine-mui";
import { BiArrowBack } from "react-icons/bi";
import Post from "../components/Post";
import Comment from "../components/Comment";
const SpecificPost = () => {
  const { id } = useParams();
  const [comment, setComment] = React.useState("");
  const GoBack = () => {
    window.history.back();
  };
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
        <Post />
        <div className={styles.post_comment}>
          <Avatar
            src="./pic.jpg"
            sx={{
              width: "45px",
              height: "45px",
            }}
          />
          <InputBase
            sx={{
              flex: 1,
              fontSize: "1.1rem",
              fontFamily: "Poppins",
              color: "text.normal",
              // style the placeholder
              "& .MuiInputBase-input::placeholder": {
                color: "text.light",
                opacity: 1,
                fontSize: "1.1rem",
                fontWeight: "500",
                fontFamily: "Poppins",
              },
            }}
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            multiline
          />

          <Button
            variant="contained"
            sx={{
              width: "80px",
              height: "38px",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "text.normal",
              textTransform: "capitalize",
              borderRadius: "100vw",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
            disabled={comment === "" ? true : false}
          >
            Reply
          </Button>
        </div>
        <Comment />
      </div>
    </>
  );
};

export default SpecificPost;
