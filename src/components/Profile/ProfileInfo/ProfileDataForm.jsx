import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  TextArea,
} from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import style from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.userInfo} title=" User Information">
        <div className={s.fullName}>
          {createField("Full name", "fullName", [], Input)}
        </div>

        <div>
          Looking for a job:
          {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>

        <div>{createField("About me", "aboutMe", [], TextArea)}</div>

        <div>
          {createField(
            "My profesional skills",
            "lookingForAJobDescription",
            [],
            TextArea
          )}
        </div>

        <div className={s.contacts}>
          <b>Contacts</b>:{" "}
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key} className={s.contact}>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </div>
            );
          })}
        </div>
        <div>
        {error && <div className={style.formSummaryError}>{error}</div>}
          <button>SAVE</button>
        </div>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
