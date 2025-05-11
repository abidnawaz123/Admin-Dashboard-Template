import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAllLeads,
} from "../../services/all_services";

function* getAllLeadsSaga(action) {
  try {
    const payload = yield call(getAllLeads, action.payload);
    yield put({ type: "GET_ALL_LEADS_SUCCESS", payload: payload.data });
  } catch (error) {
    yield put({ type: "GET_ALL_LEADS_FAILED", message: error.message });
  }
}

export function* watchGetAllLeads() {
  yield takeEvery("GET_ALL_LEADS_REQUEST", getAllLeadsSaga);
}
