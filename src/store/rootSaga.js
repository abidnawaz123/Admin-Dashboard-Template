import { all } from "redux-saga/effects";
import { watchUserLogin } from "./auth/auth_sagas";
import {watchUserProfileDetails} from "./profile/sagas";
import {watchAssignedProjects} from "./assigned_projects/sagas";

export default function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserProfileDetails(),    
    watchAssignedProjects(),
  ]);
}
