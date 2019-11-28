import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCandidatsSuccess,
  FETCHED_CANDIDATS,
  REMOVED_CANDIDAT,
  EDIT_CANDIDAT,
  ADD_CANDIDAT
} from "redux/actions";
import CandidatsServices from "../../services/candidats-services";

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
    if (result.status === 200) {
      yield call(fetchCandidatsAsync);
    }
  } catch (e) {
    console.log("e", e);
  }
}

export {
  watchFetchCandidats,
  watchRemoveCandidat,
  watchEditCandidat,
  watchAddCandidat
};
