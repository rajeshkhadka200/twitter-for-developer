import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Container,
  Card,
} from "@pankod/refine-mui";
import React from "react";
import styles from "../css/components/Post.module.css";
import { FiMoreHorizontal, FiEdit } from "react-icons/fi";
import { MdVerified, MdDelete } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

const Post = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLightbox, setOpenLightbox] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const text = "Hi, It's me Full stack developer #dev";
  return (
    <>
      {
        //open the lightbox when the image is clicked
      }
      <div className={styles.post_container}>
        <div className={styles.post_left}>
          <Avatar src="./pic.jpg" sx={{ width: "45px", height: "45px" }} />
        </div>
        <div className={styles.post_right}>
          <div className={styles.info_top}>
            <div className={styles.info}>
              <span className={styles.info_name}>Utsav bhattarai</span>
              <span className={styles.green_tick}>
                <MdVerified />
              </span>
              <span className={styles.username}>@utsavdev</span>
              <span className={styles.dot}></span>
              <span className={styles.time}>1m</span>
            </div>
            <IconButton
              sx={{
                width: "35px",
                height: "35px",
                color: "text.light",
                //make the primary hover color
                "&:hover": {
                  color: "primary.main",
                  //transparent green background
                  backgroundColor: "rgba(29,161,242,0.1)",
                },
              }}
              onClick={handleClick}
            >
              <FiMoreHorizontal />
            </IconButton>
            <Menu
              id="devit-menu"
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              //style the small menu with the theme color
              PaperProps={{
                sx: {
                  backgroundColor: "background.default",
                  color: "text.primary",
                  width: "85px",
                  padding: "0px",
                  //remove top bottom padding
                  "& .MuiMenu-list": {
                    padding: "0px",
                  },
                },
              }}
              //style the menu items
              MenuListProps={{
                sx: {
                  "& .MuiMenuItem-root": {
                    padding: "6px 8px",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    "&:hover": {
                      backgroundColor: "rgba(29,161,242,0.1)",
                    },
                  },
                },
              }}
            >
              <MenuItem>
                <ListItemIcon
                  style={{
                    minWidth: "0px",
                    marginRight: "6px",
                    fontSize: "16px",
                  }}
                >
                  <FiEdit />
                </ListItemIcon>
                Edit
              </MenuItem>
              <MenuItem>
                <ListItemIcon
                  style={{
                    minWidth: "0px",
                    marginRight: "6px",
                    fontSize: "16px",
                  }}
                >
                  <MdDelete />
                </ListItemIcon>
                Delete
              </MenuItem>
            </Menu>
          </div>
          <div className={styles.content}>
            <Typography
              varitant="p"
              //style the text
              sx={{
                fontSize: "16px",
                fontFamily: "Poppins",
                color: "text.normal",
                fontWeight: "400",
                marginTop: "-5px",
              }}
              //highlight the #hashtags and @mentions
              component="p"
              dangerouslySetInnerHTML={{
                //higlight #hashtag and @mentions with the theme color
                __html: text
                  .replace(
                    /#(\w+)/g,
                    '<span style="color: #00BA7C;">#$1</span>'
                  )
                  .replace(
                    /@(\w+)/g,
                    '<span style="color: #00BA7C;font-weight: 500;">@$1</span>'
                  ),
              }}
            ></Typography>
            <Card
              //make the image responsive
              sx={{
                height: "250px",
                width: "80%",
                marginBlock: "10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              <img
                src="./pic.jpg"
                alt="post"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onClick={() => setOpenLightbox(true)}
              />
            </Card>
          </div>
          <div className={styles.action_con}>
            <IconButton
              sx={{
                width: "37px",
                height: "37px",
                color: "text.light",
                "&:hover": {
                  color: "#f91880",
                  backgroundColor: "#32253a",
                },
              }}
              className={styles.icon}
            >
              <AiOutlineHeart />
            </IconButton>
            <span className={styles.like}>1</span>
            <IconButton
              sx={{
                width: "37px",
                height: "37px",
                color: "text.light",
                fontSize: "40px",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "rgba(29,161,242,0.1)",
                },
              }}
              className={styles.icon}
            >
              <AiOutlineRetweet />
            </IconButton>
            <span className={styles.retweet}>1</span>
            <IconButton
              sx={{
                width: "37px",
                height: "37px",
                color: "text.light",
                fontSize: "19px",
                "&:hover": {
                  color: "#1d9bf0",
                  backgroundColor: "#1c3345",
                },
              }}
              className={styles.icon}
            >
              <BiComment />
            </IconButton>
            <span className={styles.comment}>1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
