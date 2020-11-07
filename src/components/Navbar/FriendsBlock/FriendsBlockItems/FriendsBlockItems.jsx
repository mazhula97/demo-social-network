import React from "react";


import s from "./FriendsBlockItems.module.css";

const FriendsBlockItems = () => {
  return (
    <div className={s.friendsBlockItems}>
      <div className={s.friendItem}>
        <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" alt="" />
        <div className={s.friendItemName}>Name</div>
      </div>
      <div className={s.friendItem}>
        <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" alt="" />
        <div className={s.friendItemName}>Name</div>
      </div>
      <div className={s.friendItem}>
        <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" alt="" />
        <div className={s.friendItemName}>Name</div>
      </div>
      <div className={s.friendItem}>
        <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" alt="" />
        <div className={s.friendItemName}>Name</div>
      </div>
    </div>
  );
};

export default FriendsBlockItems;
