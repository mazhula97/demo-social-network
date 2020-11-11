import React from "react";
import s from "./Friends.module.css";
import comingSoon from "../../assets/images/comingSoon.png";

const Friends = (props) => {
  return (
    <div className={s.friends}>
    <div className={s.comingSoon}>
      <img src={comingSoon} alt="" />
    </div>
  </div>
  );
};

export default Friends;
