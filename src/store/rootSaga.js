import { all } from "redux-saga/effects";
import { watchUserLogin } from "./auth/auth_sagas";
import { watchUserProfileDetails } from "./profile/sagas";
import { watchAssignedProjects } from "./assigned_projects/sagas";
import { watchAssignedTickets } from "./assigned_tickets/sagas";

export default function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserProfileDetails(),
    watchAssignedProjects(),
    watchAssignedTickets(),
  ]);
}
