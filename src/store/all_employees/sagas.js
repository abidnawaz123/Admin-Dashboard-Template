import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAllEmployees,
} from "../../services/all_services";

function* getAllEmployeesSaga(action) {
  try {
    const payload = yield call(getAllEmployees, action.payload);
    yield put({ type: "GET_ALL_EMPLOYEES_SUCCESS", payload: payload.data });
  } catch (error) {
    yield put({ type: "GET_ALL_EMPLOYEES_FAILED", message: error.message });
  }
}

export function* watchGetEmployees() {
  yield takeEvery("GET_ALL_EMPLOYEES_REQUEST", getAllEmployeesSaga);
}
