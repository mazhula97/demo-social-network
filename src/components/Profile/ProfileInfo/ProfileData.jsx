import React from "react";
import s from "./ProfileData.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileData = ({
  profile,
  status,
  updateStatus,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div className={s.userData} title=" User Information">
      <div className={s.fullName}>{profile.fullName}</div>
      <div className={s.editProfileButton}>
        {isOwner && (
          <button onClick={goToEditMode} className={s.editButton}>
          ✎
          </button>
        )}
      </div>
      <div className={s.statusInput}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>

      <div className={s.aboutMe}>
        <b>About me:</b>
        <div> {profile.aboutMe} </div>
      </div>
      <div className={s.mySkills}>
        <b>My skills:</b>
        <div className={s.mySkillsText}>{profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

export default ProfileData;
