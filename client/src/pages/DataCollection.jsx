import React from "react";
import style from "../css/pages/Datacollection.module.css";
import { BsArrowRight, BsMicFill, BsFillBookFill } from "react-icons/bs";
import { Button } from "@pankod/refine-mui";
import { TextField } from "@pankod/refine-mui";
import { NavLink } from "@pankod/refine-react-router-v6";
const DataCollection = () => {
  return (
    <>
      <nav>
        <div className={style.logo}>
          <NavLink to={"/"}>DevHub</NavLink>
        </div>
      </nav>
      <div className={style.container}>
        <header>
          <span>Complete your profile!</span>
          <img
            className={style.complete_profile_img}
            src="/assets/profile-img.jpg"
            alt="profile"
          />
        </header>
        <form className={style.from_data_collection}>
          {/* username feild */}
          <TextField
            className={style.common}
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
                // height: "15px",
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
            {/* first name field */}
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
                  // height: "15px",
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

            {/* last name field */}
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
                  // height: "15px",
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
            disabled
            className={style.common}
            defaultValue={"rajeshkhadkaofficial45@gmail.com"}
            InputLabelProps={{
              style: {
                fontFamily: "Poppins",
                fontSize: "15px",
                lineHeight: "15px",
              },
            }}
            inputProps={{
              style: {
                // height: "15px",
                fontSize: "14px",
                fontFamily: "Poppins",
                width: "100%",
              },
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            multiline
            // defaultValue={"Trying to learn new things everyday."}
            InputLabelProps={{
              style: {
                fontFamily: "Poppins",
                fontSize: "15px",
                lineHeight: "15px",
              },
            }}
            inputProps={{
              style: {
                height: "150px",
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
        <div className={style.register_btn_con}>
          <Button
            size="medium"
            variant="contained"
            sx={{
              color: "var(--text)",
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "none",
              backgroundColor: "var(--primary)",
              fontSize: "16px",
              padding: "7px 15px",

              // "&:hover": {
              //   backgroundColor: "var(--primary)",
              // },
            }}
            endIcon={<BsArrowRight size={"28"} />}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default DataCollection;
