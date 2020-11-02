import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USERS_DATA = "auth/SET-USERS-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthMeThunkCreator = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
      dispatch(getAuthMeThunkCreator());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };


export const logoutThunkCreator = () => async (dispatch) => {
   let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(getAuthMeThunkCreator(null, null, null, false));
      }
    };
  


export default authReducer;
