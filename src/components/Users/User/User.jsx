import React from "react";
import s from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={s.usersItem}>
      <div className={s.userPhotoItem}>
        <NavLink to={"/profile/" + user.id}>
          <img
            alt={"User"}
            src={user.photos.small != null ? user.photos.small : userPhoto}
            
          />
        </NavLink>
      </div>

      <div className={s.userStatusName}>
        <div>{user.name}</div>
        <div> {user.status ? user.status : "No status"} </div>
      </div>
      <div className={s.followButton}>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow{" "}
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow{" "}
          </button>
        )}
      </div>
      <div className={s.otherInfo}>Other</div>
    </div>
  );
};
export default User;
