import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCandidatsSuccess,
  FETCHED_CANDIDATS,
  REMOVED_CANDIDAT,
  EDIT_CANDIDAT,
  ADD_CANDIDAT
} from "redux/actions";
import CandidatsServices from "../../services/candidats-services";
import { getCandidatSucced, GET_CANDIDAT } from "../actions";

const candidatService = new CandidatsServices();

function* watchFetchCandidats() {
  yield takeEvery(FETCHED_CANDIDATS, fetchCandidatsAsync);
}
function* watchRemoveCandidat() {
  yield takeEvery(REMOVED_CANDIDAT, removeCandidat);
}
function* watchEditCandidat() {
  yield takeEvery(EDIT_CANDIDAT, editCandidat);
}
function* watchAddCandidat() {
  yield takeEvery(ADD_CANDIDAT, addCandidat);
}
function* watchFetchCandidatAsync() {
  yield takeEvery(GET_CANDIDAT, fetchCandidatAsync);
}

function* fetchCandidatsAsync() {
  try {
    const data = yield call(() => {
      return candidatService.getAllCandidats().then(res => res);
    });
    yield put(fetchCandidatsSuccess(data.data.candidats));
  } catch (e) {
    console.log("error", e);
  }
}

function* addCandidat({ payload }) {
  try {
    const result = yield call(candidatService.addCandidat, payload);
    console.log("result", result);
  } catch (e) {
    console.log("error", e);
  }
}

function* removeCandidat({ payload }) {
  try {
    const result = yield call(candidatService.deleteCandidat, payload);
    console.log("result", result);
    if (result.status === 201) {
      yield call(fetchCandidatsAsync);
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* editCandidat({ payload }) {
  try {
    const result = yield call(candidatService.editCandidat, payload);

    if (result.status === 201) {
      payload.multi
        ? yield call(fetchCandidatsAsync)
        : yield put(getCandidatSucced(result.data));
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* fetchCandidatAsync({ payload }) {
  try {
    const data = yield call(candidatService.getCandidat, payload);

    yield put(getCandidatSucced(data.data));
  } catch (e) {
    console.log("e", e);
  }
}

export {
  watchFetchCandidats,
  watchRemoveCandidat,
  watchEditCandidat,
  watchAddCandidat,
  watchFetchCandidatAsync
};
