import { watchFetchUsers } from "./fetch-user";
import { watchFetchStaffs } from "./fetch-staffs";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchFetchUsers(), watchFetchStaffs()]);
}
