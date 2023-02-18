import React, { useContext } from "react";
import styles from "../css/components/Devit.module.css";
import Codemirror from "codemirror";
import {
  Avatar,
  Button,
  IconButton,
  InputBase,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@pankod/refine-mui";
import Picker from "emoji-picker-react";
import {
  BsImageFill,
  BsThreeDots,
  BsEmojiSmile,
  BsLink45Deg,
  BsCalendar2Event,
} from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { CgPoll } from "react-icons/cg";

//import the theme
import { tags as t } from "@lezer/highlight";

// codemirror setup
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closebrackets";
import { ContextProvider } from "../config/Context";
import { toast } from "react-hot-toast";

function Devit() {
  const { userDetails } = useContext(ContextProvider);
  const [user, setuser] = userDetails;
  //input state
  const [value, setValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [emoji, setEmoji] = React.useState(false);
  const [code, setCode] = React.useState(false);

  const [img, setImg] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEmoji = () => {
    setEmoji(!emoji);
  };

  const handleDevit = () => {
    toast.success("Devit posted successfully");
  }

  const getImg = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  // handle code mirror editor
  async function Editorinit() {
    codeRef.current = Codemirror.fromTextArea(
      document.getElementById("editor"),
      {
        mode: { name: "python", json: true },
        theme: "dracula",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
        lineWrapping: true,
      }
    );
    codeRef.current.on("change", (ins, changes) => {
      const { origin } = changes;
      const code = ins.getValue();
      console.log(code);
    });
  }
  const codeRef = React.useRef(null);
  React.useEffect(() => {
    Editorinit();
  }, [code]);

  return (
    <>
      <div className={styles.devit_container}>
        <div className={styles.left}>
          <Avatar src={user?.avatar} sx={{ width: "45px", height: "45px" }} />
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
          ></InputBase>

          {code && (
            <div className={styles.code_container}>
              <IconButton
                sx={{
                  width: "24px",
                  height: "24px",
                  position: "absolute",
                  top: "30px",
                  left: "-8px",
                  color: "text.normal",
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  padding: "0px",
                  fontSize: "1.2rem",
                  zIndex: 999,
                  "&:hover": {
                    //dark green
                    backgroundColor: "#1b5e20",
                  },
                }}
                onClick={() => setCode(!code)}
              >
                <RxCross2 />
              </IconButton>
              <textarea id="editor" wrap="hard" />
            </div>
          )}

          {img && (
            <div className={styles.img_container}>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  color: "text.normal",
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  fontSize: "1.3rem",
                  padding: "0px",
                  "&:hover": {
                    //light dark green
                    backgroundColor: "#2e7d32",
                  },
                }}
                onClick={() => setImg("")}
              >
                <RxCross2 />
              </IconButton>
              <img src={img} alt="img" />
            </div>
          )}
          <div className={styles.bottom_part}>
            <div className={styles.icon_con}>
              <Tooltip
                title="Add image"
                sx={{ width: "33px", height: "33px", color: "primary.main" }}
              >
                <IconButton
                  sx={{ width: "33px", height: "33px", color: "primary.main" }}
                  disabled={code}
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={getImg}
                  />
                  <BsImageFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Code Block">
                <IconButton
                  sx={{ width: "35px", height: "35px", color: "primary.main" }}
                  onClick={() => setCode(!code)}
                  disabled={img}
                >
                  <BiCodeBlock />
                </IconButton>
              </Tooltip>
              <Tooltip title="Emojis">
                <IconButton
                  sx={{ width: "33px", height: "33px", color: "primary.main" }}
                  //press windows key + . to open emoji picker
                  onClick={handleEmoji}
                >
                  {emoji ? <RxCross2 /> : <BsEmojiSmile />}
                </IconButton>
              </Tooltip>
              <Tooltip title="More">
                <IconButton
                  sx={{ width: "35px", height: "35px", color: "primary.main" }}
                  onClick={handleClick}
                >
                  <BsThreeDots />
                </IconButton>
              </Tooltip>
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
                    width: "220px",
                    padding: "2px 0",
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
                <MenuItem onClick={handleClose}>
                  <ListItemIcon
                    style={{
                      minWidth: "0px",
                      marginRight: "6px",
                      fontSize: "18px",
                    }}
                  >
                    <BsLink45Deg />
                  </ListItemIcon>
                  Embed links(soon)
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon
                    style={{
                      minWidth: "0px",
                      marginRight: "6px",
                      fontSize: "16px",
                    }}
                  >
                    <CgPoll />
                  </ListItemIcon>
                  Create Poll(soon)
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon
                    style={{
                      minWidth: "0px",
                      marginRight: "6px",
                      fontSize: "15px",
                    }}
                  >
                    <BsCalendar2Event />
                  </ListItemIcon>{" "}
                  Schedule the post(soon)
                </MenuItem>
              </Menu>
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
              onClick={handleDevit}
            >
              Devit
            </Button>
          </div>
          <div className={styles.emoji_wrapper}>
            {emoji && (
              <Picker
                onEmojiClick={(e) => {
                  setValue(value + e.emoji);
                }}
                groupNames={{
                  smileys_people: "PEOPLE",
                  animals_nature: "NATURE",
                  food_drink: "FOOD",
                  travel_places: "PLACES",
                  activities: "ACTIVITIES",
                  objects: "OBJECTS",
                  symbols: "SYMBOLS",
                  flags: "FLAGS",
                }}
                native
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Devit;
