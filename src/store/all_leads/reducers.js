import { combineReducers } from "@reduxjs/toolkit";

const initialStates = {
  loading: false,
  error: null,
  leads: null,
};


const allLeadsReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "GET_ALL_LEADS_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_ALL_LEADS_FAILED":
      return { ...state, error: action.message, loading: false };
    case "GET_ALL_LEADS_SUCCESS":
      return { ...state, leads: action.payload, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  allLeads: allLeadsReducer,
});
