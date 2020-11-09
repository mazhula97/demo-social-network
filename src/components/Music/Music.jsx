import React from "react";
import s from "./Music.module.css";
import comingSoon from "../../assets/images/comingSoon.png";
const Music = (props) => {
  return (
    <div className={s.music}>
      <div className={s.comingSoon}>
        <img src={comingSoon} alt="" />
      </div>
    </div>
  );
};

export default Music;
