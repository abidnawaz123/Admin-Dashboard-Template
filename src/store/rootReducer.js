import { combineReducers } from "@reduxjs/toolkit";
import auth_reducers from "./authentication/auth_reducers";

export default combineReducers({
  auth_user: auth_reducers,
});
