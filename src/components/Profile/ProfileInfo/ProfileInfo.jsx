import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profileInformation}>
      <div className={s.userInformation}>
        <div className={s.userImage} title="User Image">
          <img src={profile.photos.large} />
        </div>
        <div className={s.userInfo} title=" User Information">
 
  <div className={s.fullName}><h3> {profile.fullName} </h3></div>
 
  <ProfileStatusWithHooks status={status} 
  updateStatus={updateStatus} />
          
          <div>Looking for a job: 
            <b>{profile.lookingForAJob === true ? "YES" : "NO"}</b> 
            
          </div>
          
          <div>Looking for a job description: 
            <div>
              <b>{profile.lookingForAJobDescription}</b>
            </div>
          </div>
          <div className={s.contact}>
        <ul className={s.contactUl}>
          <li>facebook</li>
          <li>website</li>
          <li>vk:{profile.contacts.vk}</li>
          <li>twitter</li>
          <li>instagram</li>
          <li>youtube</li>
          <li>github</li>
          <li>mainLink</li>
        </ul>
      </div>
        </div>
      </div>
    
    </div>
  );
};

export default ProfileInfo;
