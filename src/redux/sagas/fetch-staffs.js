import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  FETCHED_STAFFS,
  REMOVED_USER,
  EDIT_USER,
  ADD_USER
} from "redux/actions";
import StaffServices from "services/staff-services";
import { getUserSucceed, GET_USER } from "../actions/actions-staff-list";

const staffService = new StaffServices();

function* watchFetchStaffs() {
  yield takeEvery(FETCHED_STAFFS, fetchStaffsAsync);
}
function* watchRemoveUser() {
  yield takeEvery(REMOVED_USER, removeUser);
}
function* watchEditUser() {
  yield takeEvery(EDIT_USER, editUser);
}
function* watchAddUser() {
  yield takeEvery(ADD_USER, addUser);
}
function* watchFetchUserAsync() {
  yield takeEvery(GET_USER, fetchUserAsync);
}

function* fetchStaffsAsync() {
  try {
    const data = yield call(() => {
      return staffService.getAllUsers().then(res => res);
    });

    yield put(fetchUsersSuccess(data.data.results));
  } catch (e) {
    console.log("error", e);
  }
}

function* addUser({ payload }) {
  try {
    yield call(staffService.addUser, payload);
  } catch (e) {
    console.log("error", e);
  }
}

function* removeUser({ payload }) {
  try {
    const result = yield call(staffService.deleteUser, payload);

    if (result.status === 201) {
      yield call(fetchStaffsAsync);
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* editUser({ payload }) {
  try {
    console.log("payload", payload);

    const result = yield yield call(staffService.editUser, payload);
    console.log("result", result);
    if (result.status === 200) {
      yield call(fetchStaffsAsync);
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* fetchUserAsync({ payload }) {
  try {
    const data = yield call(staffService.getUser, payload);

    yield put(getUserSucceed(data.data));
  } catch (e) {
    console.log("e", e);
  }
}

export {
  watchFetchStaffs,
  watchRemoveUser,
  watchEditUser,
  watchAddUser,
  watchFetchUserAsync
};
