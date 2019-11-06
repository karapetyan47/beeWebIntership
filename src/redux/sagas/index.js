import { watchFetchUsers } from "redux/sagas/fetch-users";
import { watchFetchStaffs } from "redux/sagas/fetch-staffs";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchFetchUsers(), watchFetchStaffs()]);
}
