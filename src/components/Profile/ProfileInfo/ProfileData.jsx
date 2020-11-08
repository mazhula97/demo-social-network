import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfileData = ({
  profile,
  status,
  updateStatus,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div className={s.userInfo} title=" User Information">
      <div className={s.fullName}>
         {profile.fullName} 
      </div>

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

      <div>
        <b>Looking for a job:</b>
        <b>{profile.lookingForAJob === true ? "YES" : "NO"}</b>
      </div>

      <div>
        <b>My skills:</b>
        <div>{profile.lookingForAJobDescription}</div>
        <div>
          <b>About me:</b>
          <div> {profile.aboutMe} </div>
        </div>
      </div>
      <div className={s.contacts}>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            profile.contacts[key] && (
              <Contacts
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            )
          );
        })}
      </div>
      {isOwner && (
        <button onClick={goToEditMode} className={s.editButton}>
          Edit
        </button>
      )}
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: <b>{contactValue}</b>
    </div>
  );
};

export default ProfileData;
