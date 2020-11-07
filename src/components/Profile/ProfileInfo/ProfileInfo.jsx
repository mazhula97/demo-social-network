import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, isOwner, savePhoto, status, updateStatus, saveProfile}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader className={s.profilePreloader} />;
  }

  const onMainPhotoChange = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData)
    .then(() => {
      setEditMode(false);
    })
    
  };
  return (
    <div className={s.userInformation}>
      <div className={s.mainPhoto} title="User Image">
        <img alt={"Main"} src={profile.photos.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoChange} />}
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={profile}
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          goToEditMode={() => setEditMode(true)}
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      )}
    </div>
  );
};

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
        <h3> {profile.fullName} </h3>
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

export default ProfileInfo;
