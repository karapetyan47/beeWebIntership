import { watchLogin } from "./fetch-user";
import {
  watchFetchStaffs,
  watchRemoveUser,
  watchEditUser,
  watchAddUser
} from "./fetch-staffs";
import {
  watchGetBenefits,
  watchAddBenefit,
  watchEditBenefit,
  watchRemoveBenefit,
  watchGetBenefitsHistorys,
  watchRemoveBenefitsHistory,
  watchAddBenefitsHistory
} from "./fetch-benefits";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchFetchStaffs(),
    watchRemoveUser(),
    watchEditUser(),
    watchAddUser(),
    watchGetBenefits(),
    watchAddBenefit(),
    watchEditBenefit(),
    watchRemoveBenefit(),
    watchGetBenefitsHistorys(),
    watchRemoveBenefitsHistory(),
    watchAddBenefitsHistory()
  ]);
}
