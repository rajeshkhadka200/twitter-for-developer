import React from "react";
import { Button, IconButton, Tooltip } from "@pankod/refine-mui";
import style from "../css/components/HackathonCard.module.css";
import { BsArrowDownLeft, BsBook, BsCalendar2Event } from "react-icons/bs";
import { SiJsonwebtokens } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

const HackathonCard = () => {
  return (
    <>
      <div className={style.hack_card}>
        <div className={style.wrapper}>
          <div className={style.hack_left}>
            <div className={style.img}>
              <img src="/assets/hack.avif" alt="hack_cover" />
            </div>
            <div className={style.hack_info}>
              <p className={style.tittle}>Linode Hackathon</p>
              <p className={style.days_left}>3 days left</p>
              <p className={style.participents}>
                <span>333</span>{" "}
                <span className={style.seperate}> participents</span>
              </p>
            </div>
          </div>
          <div className={style.hack_right}>
            <div className={style.btn_hack}>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  color: "var(--text)",
                  fontFamily: "Poppins",
                  textTransform: "none",
                  backgroundColor: "#344454",
                  fontSize: "14px",
                  // fontWeight: "bold",
                  padding: "7px 5px",
                  borderRadius: "50vw",
                  width: "100%",
                  // disable hover
                  "&:hover": {
                    backgroundColor: "#344454",
                  },
                }}
              >
                $ 1000
              </Button>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  color: "var(--text)",
                  fontFamily: "Poppins",
                  textTransform: "none",
                  backgroundColor: "var(--primary)",
                  fontSize: "14px",
                  padding: "7px 14px",
                  borderRadius: "50vw",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                Hack it{" "}
                <BsArrowDownLeft
                  style={{
                    transform: "rotate(180deg)",
                    fontWeight: "bold",
                  }}
                  size={"15"}
                />
              </Button>
            </div>
          </div>
        </div>

        <div className={style.bottom}>
          <div className={style.source}>
            <IconButton
              sx={{
                color: "var(--light-text)",
                fontSize: "20px",
              }}
            >
              <FiGlobe />
            </IconButton>
            <span>Hashnode</span>
          </div>
          <div className={style.source}>
            <IconButton
              sx={{
                color: "var(--light-text)",
                fontSize: "20px",
              }}
            >
              <BsCalendar2Event />
            </IconButton>
            <span>12 Jan - 12 Feb</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HackathonCard;
