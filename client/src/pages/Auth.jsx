import React, { useEffect } from "react";
import style from "../css/pages/login.module.css";
import { Button } from "@pankod/refine-mui";
import { TextField } from "@pankod/refine-mui";
import provider from "../config/axios.js";

//login imports
import { useGoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Navigate, useNavigate } from "@pankod/refine-react-router-v6";
import { SiCodemagic } from "react-icons/si";

const Auth = () => {
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      return <Navigate to="/app" replace />;
    }
  }, [token]);

  const navigate = useNavigate();
  const clientId = import.meta.env.VITE_APP_CLIENT_ID;
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  // on failure
  const onFailure = (err) => {
    if (err.details === "Cookies are not enabled in current environment.") {
      alert("Please enable cookies");
    }
  };

  // onscuucess
  const onSuccess = async (data) => {
    const { profileObj } = data;
    const { email, givenName, familyName, imageUrl } = profileObj;

    try {
      const res = await provider.post("/user/auth", {
        email,
        firstname: givenName,
        lastname: familyName,
        avatar: imageUrl,
      });

      if (res.status === 201) {
        alert("Please complete your profile");
        navigate("/complete/" + res.data.userId, {
          state: {
            res: { email, givenName, familyName, imageUrl },
          },
        });
      }
      if (res.status === 200) {
        localStorage.setItem("token", res.data.userId);
        alert("You are logged in");
        window.location.href = "/app";
      }
    } catch (error) {
      console.log(error);
    }
  };

  // setup
  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    onFailure,
  });

  return (
    <div className={style.container}>
      <div className={style.left}>
        <header>
          <div className={style.logo_wrapper}>
            <SiCodemagic />
          </div>
          <h3>Welcome User</h3>
          <p>Please enter your details</p>
        </header>
        <form className={style.form_auth}>
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
            disabled={true}
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
            disabled={true}
          />
          <Button
            onClick={() => {
              alert("Please continue with google.");
            }}
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
            disabled={true}
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
            onClick={signIn}
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
      <div className={style.right}>
        <img src="./auth.svg" className={style.auth_img} />
      </div>
    </div>
  );
};

export default Auth;
