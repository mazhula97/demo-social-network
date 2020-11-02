import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css"
let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  ...props}) => {
  return (
    <div>
      <div className={s.paginator}>
      <Paginator 
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      /> 
      </div>
      
<div>
{props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
</div>
  
    </div>
  );
};
export default Users;
