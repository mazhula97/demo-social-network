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
            Edit
          </button>
        )}
      </div>
      <div className={s.statusInput}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>

      <div>
        <b>About me:</b>
        <div> {profile.aboutMe} </div>
      </div>
      <div>
        <b>My skills:</b>
        <div>{profile.lookingForAJobDescription}</div>
      </div>
      {/* <div className={s.contacts}>
        Website:
        <a href={`${profile.contacts.vk}`}>{profile.contacts.vk || "null"}</a>
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
      </div> */}
    </div>
  );
};

// const Contacts = ({ contactTitle, contactValue }) => {
//   return (
//     <div>
//     {contactTitle}:{contactValue}
//     </div>
//   );
// };

export default ProfileData;
