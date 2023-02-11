import React from "react";
import style from "../css/pages/login.module.css";
import { Button } from "@pankod/refine-mui";
import { TextField } from "@pankod/refine-mui";
const Auth = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <header>
          <div className={style.logo}>
            {/* <img src="/assets/logo.png" alt="" /> */}
          </div>
          <h3>WelCome back </h3>
          <p>Please enter your details</p>
        </header>
        <form>
          <TextField
            InputLabelProps={{
              style: { fontFamily: "Poppins", fontSize: "15px" },
            }}
            sx={{
              fontFamily: "Poppins",
            }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            InputLabelProps={{
              style: { fontFamily: "Poppins", fontSize: "15px" },
            }}
            sx={{
              fontFamily: "Poppins",
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button
            sx={{
              fontWeight: 500,
              color: "#fff",
              fontFamily: "Poppins",
              textTransform: "capitalize",
              padding: "7px 0",
            }}
            disableElevation
            className={style.login_btn}
            variant="contained"
          >
            Continue
          </Button>
          {/* // generate or divider with css */}
          <div className={style.divider}>
            <div className={style.line}></div>
            <p>or</p>
            <div className={style.line}></div>
          </div>

          <Button
            className={style.googleBth}
            sx={{
              color: "#CCCCCC",
              fontFamily: "Poppins",
              textTransform: "capitalize",
              border: "1px solid #344454",
              padding: "7px 0",
            }}
            disableElevation
            variant="outlined"
          >
            <img src="/assets/google-logo.svg" alt="" />
            Continue with google
          </Button>
        </form>
      </div>
      <div className={style.right}></div>
    </div>
  );
};

export default Auth;
