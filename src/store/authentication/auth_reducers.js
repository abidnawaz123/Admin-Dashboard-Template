import { combineReducers } from "@reduxjs/toolkit";

const initialStates = {
  loading: false,
  error: null,
  user: null,
};

const userReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN_REQUEST":
      return { ...state, loading: true, error: null };
    case "USER_LOGGED_IN_FAILED":
      return { ...state, error: action.message, loading: false };
    case "USER_LOGGED_IN_SUCCESS":
      return { ...state, user: action.user, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});
