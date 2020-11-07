
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USERS_DATA = "auth/SET-USERS-DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET-CAPTCHA-URL-SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess= (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl},
});

export const getAuthMeThunkCreator = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
      dispatch(getAuthMeThunkCreator());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator())
      }
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
  
    export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
      let response = await securityAPI.getCaptchaUrl();
       const captchaUrl = response.data.url;
      dispatch(getCaptchaUrlSuccess(captchaUrl))
      };

export default authReducer;
