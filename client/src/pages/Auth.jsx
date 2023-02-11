import React from "react";
import style from "../css/login.module.css";

const Auth = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <header>
          <span>LOGO</span>
          <h3>WelCome back</h3>
          <p>Please enter your details</p>
        </header>
        <form>
          <input
            placeholder="Enter your username"
            type="text"
            name="email"
            required
          />
          <input
            placeholder="Enter your password"
            type="text"
            name="email"
            required
          />
          <button>Continue</button>
          {/* <button>Continue with google</button> */}
        </form>
      </div>
      <div className={style.right}></div>
    </div>
  );
};

export default Auth;
