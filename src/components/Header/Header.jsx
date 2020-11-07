import React from "react";
import s from "./Header.module.css";
import LoginBlock from "./LoginBlock";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        alt={"logo"}
        src="https://jasonpallone.com/React-icon.png"
      />
      <LoginBlock login={props.login} logout={props.logout} isAuth={props.isAuth} />
    </header>
  );
};

export default Header;
