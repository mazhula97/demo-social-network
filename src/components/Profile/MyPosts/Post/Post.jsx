import React from "react";
import s from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png";
const Post = (props) => {
  return (
    <div className={s.postItem}>
      <img alt={"Post"} src={userPhoto} />

      <div className={s.postMessage}>{props.message}</div>

      <button className={s.buttonLike}>{props.likeCount}</button>
    </div>
  );
};

export default Post;
