import React from "react";
import styles from "../css/components/Devit.module.css";
import {
  Avatar,
  Button,
  IconButton,
  InputBase,
  Tooltip,
} from "@pankod/refine-mui";
import { BsImageFill, BsThreeDots, BsEmojiSmile } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";

const Devit = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles.devit_container}>
        <div className={styles.left}>
          <Avatar src="/pic.jpg" sx={{ width: "45px", height: "45px" }} />
        </div>
        <div className={styles.right}>
          <InputBase
            sx={{
              mt: -1,
              flex: 1,
              mx: 0.5,
              fontSize: "1.1rem",
              fontFamily: "Poppins",
              color: "text.normal",

              // style the placeholder
              "& .MuiInputBase-input::placeholder": {
                color: "text.light",
                opacity: 1,
                fontSize: "1.2rem",
                fontWeight: "500",
                fontFamily: "Poppins",
              },
            }}
            placeholder="What's happening?"
            inputProps={{ "aria-label": "search google maps" }}
            multiline
            value={value}
            onChange={handleChange}
          />
          <div className={styles.bottom_part}>
            <div className={styles.icon_con}>
              <Tooltip
                title="Add image"
                sx={{ width: "33px", height: "33px", color: "primary.main" }}
              >
                <IconButton
                  sx={{ width: "33px", height: "33px", color: "primary.main" }}
                >
                  <BsImageFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Code Block">
                <IconButton
                  sx={{ width: "35px", height: "35px", color: "primary.main" }}
                >
                  <BiCodeBlock />
                </IconButton>
              </Tooltip>
              <Tooltip title="Emojis">
                <IconButton
                  sx={{ width: "33px", height: "33px", color: "primary.main" }}
                >
                  <BsEmojiSmile />
                </IconButton>
              </Tooltip>
              <Tooltip title="More">
                <IconButton
                  sx={{ width: "35px", height: "35px", color: "primary.main" }}
                >
                  <BsThreeDots />
                </IconButton>
              </Tooltip>
            </div>
            <Button
              variant="contained"
              sx={{
                borderRadius: "100vw",
                color: "text.normal",
                fontFamily: "Poppins",
                textTransform: "none",
                fontSize: "15px",
              }}
            >
              Devit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Devit;
