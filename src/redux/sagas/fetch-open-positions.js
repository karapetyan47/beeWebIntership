import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPositionsSuccess,
  FETCHED_POSITIONS,
  REMOVED_POSITION,
  EDIT_POSITION,
  ADD_POSITION,
  GET_POSITION
} from "redux/actions";
import OPService from "../../services/op-services";
import { getPositionSucced } from "../actions";

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
function* watchFetchPositionAsync() {
  yield takeEvery(GET_POSITION, fetchPositionAsync);
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

    if (result.status === 200) {
      payload.multi
        ? yield call(fetchPositionsAsync)
        : yield put(getPositionSucced(result.data));
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* fetchPositionAsync({ payload }) {
  try {
    const data = yield call(positionService.getPosition, payload);

    yield put(getPositionSucced(data.data));
  } catch (e) {
    console.log("e", e);
  }
}

export {
  watchFetchPositions,
  watchRemovePosition,
  watchEditPosition,
  watchAddPosition,
  watchFetchPositionAsync
};
