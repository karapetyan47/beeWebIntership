import { call, put, takeEvery } from "redux-saga/effects";
import { FETCHED_USERS, usersLoaded } from "redux/actions";
import UsersService from "services/users-service";

const usersService = new UsersService();

function* watchFetchUsers() {
  yield takeEvery(FETCHED_USERS, fetchUsersAsync);
}

function* fetchUsersAsync() {
  try {
    const data = yield call(() => {
      return usersService.getUsers().then(res => res);
    });
    yield put(usersLoaded(data));
  } catch {
    console.log("error Users");
  }
}

export { watchFetchUsers };
