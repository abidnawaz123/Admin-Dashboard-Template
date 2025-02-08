import { call, put, takeEvery } from "redux-saga/effects";
import {
  profileService,
  updateProfileService,
} from "../../services/profile_service";

function* getUserProfileDetails(action) {
  try {
    const profile = yield call(profileService);
    // debugger
    yield put({ type: "GET_USER_DETAIL_SUCCESS", payload: profile });
    if (profile?.data) {
      yield put({
        type: "GET_ASSIGNED_PROJECTS_REQUEST",
        payload: profile?.data?.first_name,
      });
    }
  } catch (error) {
    yield put({ type: "GET_USER_DETAIL_FAILURE", message: error.message });
  }
}

function* updateUserProfileDetails(action) {
  try {
    const response = yield call(updateProfileService, action.payload);
    // debugger;

    yield put({ type: "UPDATE_USER_DETAIL_SUCCESS", payload :response });
    if (response.status === 200) {
      yield put({ type: "GET_USER_DETAIL_REQUEST" });
    }
  } catch (error) {
    yield put({ type: "UPDATE_USER_DETAIL_FAILURE", message: error.message });
  }
}

export function* watchUserProfileDetails() {
  yield takeEvery("GET_USER_DETAIL_REQUEST", getUserProfileDetails);
  yield takeEvery("UPDATE_USER_DETAIL_REQUEST", updateUserProfileDetails);
}
