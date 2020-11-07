import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { LogoutOutlined } from '@ant-design/icons';

const LoginBlock = (props) => {
  return (
    <div className={s.loginBlock}>
      {props.isAuth ? (
        <div>
          {props.login} <LogoutOutlined className={s.loginBlockButton} onClick={props.logout} /> 
        </div>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </div>
  );
};

export default LoginBlock;
