import { combineReducers } from "@reduxjs/toolkit";

const initialStates = {
  loading: false,
  error: null,
  project: null,
};

const projectReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "GET_ASSIGNED_PROJECTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_ASSIGNED_PROJECTS_FAILED":
      return { ...state, error: action.message, loading: false };
    case "GET_ASSIGNED_PROJECTS_SUCCESS":
      return { ...state, project: action.payload.projects, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  projectDetails: projectReducer,
});
