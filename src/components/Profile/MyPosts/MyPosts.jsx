import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators.js";
import { TextArea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.nextProps != this.props || nextState != this.state;
  // }

  let postsElement = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));
  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <div className={s.addPostForm}>
        My posts
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>

      <div className={s.posts}> {postsElement} </div>
    </div>
  );
});

const maxLength300 = maxLengthCreator(300);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name={"newPostText"}
          placeholder={"Enter your post"}
          validate={[required, maxLength300]}
        />
      </div>

      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "postAddPostForm" })(AddPostForm);

export default MyPosts;
