import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader.js";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({
  profile,
  isOwner,
  savePhoto,
  status,
  updateStatus,
  saveProfile,
}) => {
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
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div className={s.userInformation}>
      <div className={s.mainPhoto} title="User Image">
        <img alt={"Main"} src={profile.photos.large || userPhoto} />
        {isOwner && (
          <input
            className={s.addFileButton}
            type={"file"}
            onChange={onMainPhotoChange}
          />
        )}
      </div>
      <div className={s.userInfo}>
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

      <div className={s.other}>Other</div>
    </div>
  );
};

export default ProfileInfo;
