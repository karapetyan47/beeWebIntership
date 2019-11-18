import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsersSuccess, FETCHED_STAFFS, REMOVED_USER } from "redux/actions";
import StaffServices from "services/staff-services";

const staffService = new StaffServices();

function* watchFetchStaffs() {
  yield takeEvery(FETCHED_STAFFS, fetchStaffsAsync);
}
function* watchRemoveUser() {
  yield takeEvery(REMOVED_USER, removeUser);
}

function* fetchStaffsAsync() {
  try {
    const data = yield call(() => {
      return staffService.getAllUsers().then(res => res);
    });
    console.log(data.data);
    yield put(fetchUsersSuccess(data.data));
  } catch (e) {
    console.log("error", e);
  }
}

function* removeUser({ payload }) {
  try {
    yield call(staffService.deleteUser, payload);
  } catch (e) {
    console.log("e", e);
  }
}

export { watchFetchStaffs, watchRemoveUser };
