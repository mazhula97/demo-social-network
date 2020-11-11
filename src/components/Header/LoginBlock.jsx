import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import s from "./Header.module.css";
import { LogoutOutlined } from "@ant-design/icons";

const LoginBlock = (props) => {
  return (
    <div className={s.loginBlock}>
      {props.isAuth ? (
        <div>
          {props.login}
          <NavLink to={"/login"}>
            <LogoutOutlined
              className={s.loginBlockButton}
              onClick={props.logout}
            />
          </NavLink>
        </div>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </div>
  );
};

export default LoginBlock;
