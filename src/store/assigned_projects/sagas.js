import { call, put, takeEvery } from "redux-saga/effects";
import { getProjects } from "../../services/all_services";

function* getAssignedProjects(action) {
  try {
    const project = yield call(getProjects, action.payload);
    yield put({ type: "GET_ASSIGNED_PROJECTS_SUCCESS", payload: project.data });

    // if (action.payload.onSuccess) {
    //   action.payload.onSuccess();
    // }
  } catch (error) {
    yield put({ type: "GET_ASSIGNED_PROJECTS_FAILED", message: error.message });
  }
}

export function* watchAssignedProjects() {
  yield takeEvery("GET_ASSIGNED_PROJECTS_REQUEST", getAssignedProjects);
}
