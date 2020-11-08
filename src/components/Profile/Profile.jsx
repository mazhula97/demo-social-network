import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"
const Profile = (props) => {
  
  return (
    <div className={s.profile}>
      <ProfileInfo className={s.pD}
      savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile} 
      status={props.status}
       updateStatus={props.updateStatus}
       saveProfile={props.saveProfile} />
     
      <MyPostsContainer className={s.cP} />
    </div>
  );
};

export default Profile;
