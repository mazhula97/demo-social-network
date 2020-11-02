import { ProfileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";

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
...state, posts: state.posts.filter(p => p.id != action.postId)
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

export default profileReducer;
