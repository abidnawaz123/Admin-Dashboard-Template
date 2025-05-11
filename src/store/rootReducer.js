import { combineReducers } from "@reduxjs/toolkit";
import auth_reducers from "./auth/auth_reducers";
import profile_reducers from "./profile/reducers";
import assigned_projects from "./assigned_projects/reducers";
import assigned_tickets from "./assigned_tickets/reducers";
import get_all_leads from "./all_leads/reducers";
import get_all_employees from "./all_employees/reducers";

export default combineReducers({
  auth_user: auth_reducers,
  profile: profile_reducers,
  projects: assigned_projects,
  tickets: assigned_tickets,
  leads: get_all_leads,
  employees: get_all_employees,
});
