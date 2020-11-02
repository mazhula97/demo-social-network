import { getAuthMeThunkCreator } from "./auth-reducer ";

const SET_INITIALIZED_SUCCESS = "SET-INITIALIZE-SUCCESS";

let initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthMeThunkCreator());

  Promise.all([promise])
  .then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
