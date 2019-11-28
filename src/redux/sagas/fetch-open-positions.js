import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPositionsSuccess,
  FETCHED_POSITIONS,
  REMOVED_POSITION,
  EDIT_POSITION,
  ADD_POSITION
} from "redux/actions";
import OPService from "../../services/op-services";

const positionService = new OPService();

function* watchFetchPositions() {
  yield takeEvery(FETCHED_POSITIONS, fetchPositionsAsync);
}
function* watchRemovePosition() {
  yield takeEvery(REMOVED_POSITION, removePosition);
}
function* watchEditPosition() {
  yield takeEvery(EDIT_POSITION, editPosition);
}
function* watchAddPosition() {
  yield takeEvery(ADD_POSITION, addPosition);
}

function* fetchPositionsAsync() {
  try {
    const data = yield call(() => {
      return positionService.getAllPositions().then(res => res);
    });
    yield put(fetchPositionsSuccess(data.data.positions));
  } catch (e) {
    console.log("error", e);
  }
}

function* addPosition({ payload }) {
  try {
    const result = yield call(positionService.addPosition, payload);
    console.log("result", result);
  } catch (e) {
    console.log("error", e);
  }
}

function* removePosition({ payload }) {
  try {
    const result = yield call(positionService.deletePosition, payload);
    if (result.status === 201) {
      yield call(fetchPositionsAsync);
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* editPosition({ payload }) {
  try {
    const result = yield call(positionService.editPosition, payload);
    console.log("result", result);
    if (result.status === 200) {
      yield call(fetchPositionsAsync);
    }
  } catch (e) {
    console.log("e", e);
  }
}

export {
  watchFetchPositions,
  watchRemovePosition,
  watchEditPosition,
  watchAddPosition
};
