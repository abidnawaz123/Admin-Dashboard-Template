import { combineReducers } from "@reduxjs/toolkit";

const initialStates = {
  loading: false,
  error: null,
  userDetail: null,
  update_loading: false,
};

const userDetailReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "GET_USER_DETAIL_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_USER_DETAIL_FAILURE":
      return { ...state, error: action.message, loading: false };
    case "GET_USER_DETAIL_SUCCESS":
      return { ...state, userDetail: action.payload.data, loading: false };
    // update profile request .
    case "UPDATE_USER_DETAIL_REQUEST":
      return { ...state, update_loading: true, error: null };
    case "UPDATE_USER_DETAIL_FAILURE":
      return { ...state, userDetail: action.message, update_loading: false };
    case "UPDATE_USER_DETAIL_SUCCESS":
      return { ...state, userDetail: action.payload.data, update_loading: false };
    // default case .
    default:
      return state;
  }
};

export default combineReducers({
  userDetail: userDetailReducer,
});
