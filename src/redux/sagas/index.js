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

import {
  watchFetchCandidats,
  watchRemoveCandidat,
  watchEditCandidat,
  watchAddCandidat
} from "./fetch-candidats";

import {
  watchFetchPositions,
  watchRemovePosition,
  watchEditPosition,
  watchAddPosition
} from "./fetch-open-positions";

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
    watchAddBenefitsHistory(),
    watchFetchPositions(),
    watchRemovePosition(),
    watchEditPosition(),
    watchAddPosition(),
    watchFetchCandidats(),
    watchRemoveCandidat(),
    watchEditCandidat(),
    watchAddCandidat()
  ]);
}
