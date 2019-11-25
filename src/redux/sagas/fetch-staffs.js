import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  FETCHED_STAFFS,
  REMOVED_USER,
  EDIT_USER,
  ADD_USER
} from "redux/actions";
import StaffServices from "services/staff-services";

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

function* fetchStaffsAsync() {
  try {
    const data = yield call(() => {
      return staffService.getAllUsers().then(res => res);
    });

    yield put(fetchUsersSuccess(data.data.users));
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
    yield call(staffService.deleteUser, payload);
    let data = yield call(() => {
      return staffService.getAllUsers().then(res => res);
    });
    data = yield call(() => {
      return staffService.getAllUsers().then(res => res);
    });

    yield put(fetchUsersSuccess(data.data.users));
  } catch (e) {
    console.log("e", e);
  }
}

function* editUser({ payload }) {
  try {
    yield call(staffService.editUser, payload);
    let data = yield call(() => {
      return staffService.getAllUsers().then(res => res);
    });

    data = yield call(() => {
      return staffService.getAllUsers().then(res => res);
    });

    yield put(fetchUsersSuccess(data.data.users));
  } catch (e) {
    console.log("e", e);
  }
}

export { watchFetchStaffs, watchRemoveUser, watchEditUser, watchAddUser };
