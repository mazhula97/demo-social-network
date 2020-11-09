import React from "react";
import s from "./Settings.module.css";
import comingSoon from "../../assets/images/comingSoon.png";
const Settings = (props) => {
  return (
    <div className={s.settings}>
      <div className={s.comingSoon}>
        <img src={comingSoon} alt="" />
      </div>
    </div>
  );
};

export default Settings;
