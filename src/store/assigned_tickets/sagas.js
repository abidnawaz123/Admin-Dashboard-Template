import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAssignedTickets,
  updateTicketApi,
} from "../../services/all_services";

function* getAssignedTicketsSaga(action) {
  try {
    const payload = yield call(getAssignedTickets, action.payload);
    yield put({ type: "GET_ASSIGNED_TICKETS_SUCCESS", payload: payload.data });

    // if (action.payload.onSuccess) {
    //   action.payload.onSuccess();
    // }
  } catch (error) {
    yield put({ type: "GET_ASSIGNED_TICKETS_FAILED", message: error.message });
  }
}

function* getUpdateTicketSaga(action) {
  try {
    const payload = yield call(updateTicketApi, action.payload);
    console.log("updated payload ===>", payload);
    if (payload.status === 200) {
      yield put({
        type: "GET_ASSIGNED_TICKETS_REQUEST",
        payload: action.payload.user_id,
      });
    }
  } catch (error) {
    yield put({ type: "UPDATE_TICKET_ERROR", message: error.message });
  }
}

export function* watchAssignedTickets() {
  yield takeEvery("GET_ASSIGNED_TICKETS_REQUEST", getAssignedTicketsSaga);
  yield takeEvery("UPDATE_TICKET_REQUEST", getUpdateTicketSaga);
}
