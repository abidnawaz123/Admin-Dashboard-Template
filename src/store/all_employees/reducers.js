import { combineReducers } from "@reduxjs/toolkit";

const initialStates = {
  loading: false,
  error: null,
  employees: null,
};


const allEmployeesReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "GET_ALL_EMPLOYEES_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_ALL_EMPLOYEES_FAILED":
      return { ...state, error: action.message, loading: false };
    case "GET_ALL_EMPLOYEES_SUCCESS":
      return { ...state, employees: action.payload, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  allEmployees: allEmployeesReducer,
});
