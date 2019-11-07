import { call, put, takeEvery } from "redux-saga/effects";
import { staffsLoaded, FETCHED_STAFFS } from "redux/actions";
import StaffServices from "services/staff-services";

const staffService = new StaffServices();

function* watchFetchStaffs() {
  yield takeEvery(FETCHED_STAFFS, fetchStaffsAsync);
}

function* fetchStaffsAsync() {
  try {
    const data = yield call(() => {
      return staffService.getStaffs().then(res => res);
    });
    yield put(staffsLoaded(data));
  } catch {
    console.log("error Staffs");
  }
}

export { watchFetchStaffs };
