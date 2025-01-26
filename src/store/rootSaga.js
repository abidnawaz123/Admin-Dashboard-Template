import { all } from "redux-saga/effects";
import { watchUserLogin } from "./auth_redux/auth_sagas";
import { watchUserProfileDetails } from "./profile_redux/sagas";

export default function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserProfileDetails(),    
  ]);
}
