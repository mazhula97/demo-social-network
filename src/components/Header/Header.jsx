import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={s.header}>
      <img src="https://droidmania.ru/sites/default/files/downloads/title/unnamed_729.png" />
      <div className={s.loginBlock}>
        {props.isAuth 
        ? <div> {props.login} <button onClick={props.logout}>Logout</button>  </div> 
        : <NavLink to={"/login"}>Login</NavLink> }
        
      </div>
    </header>
  );
};

export default Header;
