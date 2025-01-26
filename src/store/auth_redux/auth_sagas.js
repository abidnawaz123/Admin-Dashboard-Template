import { call, put, takeEvery } from "redux-saga/effects";
import { login } from "../../services/auth_service";

function* loginUser(action) {
  try {
    const user = yield call(login, action.payload);
    yield put({ type: "USER_LOGGED_IN_SUCCESS", user });
    if (user.data) {
      localStorage.setItem("access_token", user.data["access_token"]);
      localStorage.setItem("refresh_token", user.data["refresh_token"]);
    }

    if (action.payload.onSuccess) {
      action.payload.onSuccess();
    }
  } catch (error) {
    yield put({ type: "USER_LOGGED_IN_FAILED", message: error.message });
  }
}

export function* watchUserLogin() {
  yield takeEvery("USER_LOGGED_IN_REQUEST", loginUser);
}
