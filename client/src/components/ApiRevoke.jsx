import React from "react";
import { IconButton, TextField } from "@pankod/refine-mui";
import { Button } from "@pankod/refine-mui";

import style from "../css/components/Apirevoke.module.css";
import { FaRegCopy } from "react-icons/fa";
const ApiRevoke = () => {
  const [key, setKey] = React.useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(key);
  };

  const revokeKey = () => {
    setKey("");
  };

  return (
    <div className={style.header_api}>
      <p className={style.info}>
        You can use this API key to fetch your devit in your website.
      </p>
      <div className={style.input_con}>
        <TextField
          value={key}
          disabled
          inputProps={{
            style: {
              height: "15px",
              fontSize: "14px",
              fontFamily: "Poppins",
              width: "300px",
            },
          }}
          InputLabelProps={{
            style: { fontFamily: "Poppins", fontSize: "15px" },
          }}
          sx={{
            fontFamily: "Poppins",
          }}
          id="outlined-basic"
          // label="Username"
          variant="outlined"
        />
        <IconButton
          onClick={() => copyToClipboard()}
          aria-label="logo"
          sx={{
            width: "30px",
            height: "30px",
            fontSize: "15px",
            marginLeft: "-40px",
            // mt: "5px",
          }}
        >
          <FaRegCopy />
        </IconButton>
      </div>
      <Button
        onClick={() => revokeKey()}
        size="medium"
        variant="contained"
        sx={{
          color: "var(--text)",
          fontFamily: "Poppins",
          //   fontWeight: "500",
          textTransform: "none",
          backgroundColor: "var(--primary)",
          fontSize: "14px",
          padding: "7px 20px",
          borderRadius: "50vw",
        }}
        // endIcon={<BsArrowRight size={"28"} />}
      >
        Revoke key
      </Button>
    </div>
  );
};

export default ApiRevoke;
