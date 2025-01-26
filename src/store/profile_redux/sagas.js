import { call, put, takeEvery } from "redux-saga/effects";
import {
  profileService,
  updateProfileService,
} from "../../services/profile_service";

function* getUserProfileDetails(action) {
  try {
    const profile = yield call(profileService);
    yield put({ type: "GET_USER_DETAIL_SUCCESS", profile });

    // if (action.payload.onSuccess) {
    //   action.payload.onSuccess();
    // }
  } catch (error) {
    yield put({ type: "GET_USER_DETAIL_FAILURE", message: error.message });
  }
}

function* updateUserProfileDetails(action) {
  try {
    const profile = yield call(updateProfileService, action.payload);

    yield put({ type: "UPDATE_USER_DETAIL_SUCCESS", profile });
  } catch (error) {
    yield put({ type: "UPDATE_USER_DETAIL_FAILURE", message: error.message });
  }
}

export function* watchUserProfileDetails() {
  yield takeEvery("GET_USER_DETAIL_REQUEST", getUserProfileDetails);
  yield takeEvery("UPDATE_USER_DETAIL_REQUEST", updateUserProfileDetails);
}
