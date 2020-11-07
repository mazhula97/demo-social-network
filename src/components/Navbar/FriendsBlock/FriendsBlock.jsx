import React from "react";
import { NavLink } from "react-router-dom";
import FriendsBlockItems from "./FriendsBlockItems/FriendsBlockItems";

import s from "./FriendsBlock.module.css";

const FriendsBlock = (props) => {
  return (
    <div className={s.friendsBlock}>
      <div className={s.friendsLink}>
        <NavLink
          activeClassName={s.friendsActiveLink}
          to="/friends">
          Friends
        </NavLink>
      </div>
      <FriendsBlockItems />
    </div>
  );
};

export default FriendsBlock;
