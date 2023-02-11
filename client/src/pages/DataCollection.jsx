import React from "react";
import style from "../css/pages/Datacollection.module.css";

import { Button } from "@pankod/refine-mui";
import { TextField } from "@pankod/refine-mui";

const DataCollection = () => {
  return (
    <>
      <nav>
        <div className="logo">DevHub</div>
      </nav>
      <div className={style.container}>
        <header>
          <span>Complete your profile!</span>
          <img src="/assets/profile.png" alt="profile" />
        </header>
        <form>
          <TextField
            defaultValue={"rajeshkhadka200"}
            InputLabelProps={{
              style: {
                fontFamily: "Poppins",
                fontSize: "15px",
                lineHeight: "15px",
              },
            }}
            inputProps={{
              style: {
                height: "15px",
                fontSize: "14px",
                fontFamily: "Poppins",
                width: "100%",
              },
            }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <div className={style.row_send}>
            <TextField
              defaultValue={"Rajesh"}
              InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  lineHeight: "15px",
                },
              }}
              inputProps={{
                style: {
                  height: "15px",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                },
              }}
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              defaultValue={"Khadka"}
              InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  lineHeight: "15px",
                },
              }}
              inputProps={{
                style: {
                  height: "15px",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  width: "100%",
                },
              }}
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </div>
          <TextField
            defaultValue={"Rajesh"}
            InputLabelProps={{
              style: {
                fontFamily: "Poppins",
                fontSize: "15px",
                lineHeight: "15px",
              },
            }}
            inputProps={{
              style: {
                height: "15px",
                fontSize: "14px",
                fontFamily: "Poppins",
                width: "100%",
              },
            }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
        </form>
      </div>
    </>
  );
};

export default DataCollection;
