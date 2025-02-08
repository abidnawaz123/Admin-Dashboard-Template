import { combineReducers } from "@reduxjs/toolkit";
import auth_reducers from "./auth/auth_reducers";
import profile_reducers from "./profile/reducers";
import assigned_projects from "./assigned_projects/reducers";

export default combineReducers({
  auth_user: auth_reducers,
  profile: profile_reducers,
  projects: assigned_projects,
});
