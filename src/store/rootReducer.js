import { combineReducers } from "@reduxjs/toolkit";
import auth_reducers from "./auth_redux/auth_reducers";
import profile_reducers from "./profile_redux/reducers";

export default combineReducers({
  auth_user: auth_reducers,
  profile: profile_reducers,
});
