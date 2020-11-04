import { stopSubmit } from "redux-form";
import { ProfileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It is my first post", likeCount: 40 },
  ],
  profile: null,
  status: ""
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
      case SET_STATUS:
        return {
          ...state,
          status:action.status
        }
case DELETE_POST:
return {
...state, posts: state.posts.filter(p => p.id !== action.postId)
}
case SAVE_PHOTO_SUCCESS:
return {
...state, 
profile: {...state.profile, photos: action.photos} 
}
    default:
      return state;
  }
};

export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};
export const saveProfileSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};


export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
   
      dispatch(setUserProfile(response.data));
    };
  

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)
    
      dispatch(setStatus(response.data));
    };

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
    
     if (response.data.resultCode === 0){
      dispatch(setStatus(status));
     }
      
    };
export const savePhotoThunkCreator = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file)
     if (response.data.resultCode === 0){
      dispatch(savePhotoSuccess(response.data.data.photos));
     }
    };
export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId; 
  let response = await ProfileAPI.saveProfile(profile)
    
    if (response.data.resultCode === 0){
      dispatch(getUserProfileThunkCreator(userId));
     } else {
       
      // let message =
      // response.data.messages.length > 0
      //   ? response.data.messages[0]
      //   : "Some error";
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }

    };

export default profileReducer;
