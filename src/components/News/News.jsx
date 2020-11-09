import React from "react";
import comingSoon from "../../assets/images/comingSoon.png";
import s from "./News.module.css";

const News = (props) => {
  return (
    <div className={s.news}>
      <div className={s.comingSoon}>
        <img src={comingSoon} alt="" />
      </div>
    </div>
  );
};

export default News;
