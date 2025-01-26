import { all } from "redux-saga/effects";
import { watchUserLogin } from "./authentication/auth_sagas";

export default function* rootSaga() {
  yield all([
    watchUserLogin(),
    
  ]);
}
