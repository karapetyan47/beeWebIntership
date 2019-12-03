import { call, put, takeEvery } from "redux-saga/effects";
import BenefitsServices from "../../services/benefits-services";
import {
  FETCHED_BENEFITS,
  fetchBenefitsSuccess,
  fetchBenefitsHistorysSuccess,
  FETCHED_BENEFITS_HISTORYS
} from "../actions";
import {
  REMOVED_BENEFIT,
  EDIT_BENEFIT,
  ADD_BENEFIT,
  REMOVED_BENEFIT_HISTORYS,
  ADD_BENEFITS_HISTORY
} from "../actions/actions-benefits";

const benefitsService = new BenefitsServices();

function* watchGetBenefits() {
  yield takeEvery(FETCHED_BENEFITS, getBenefits);
}
function* watchRemoveBenefit() {
  yield takeEvery(REMOVED_BENEFIT, removeBenefit);
}
function* watchEditBenefit() {
  yield takeEvery(EDIT_BENEFIT, editBenefit);
}
function* watchAddBenefit() {
  yield takeEvery(ADD_BENEFIT, addBenefit);
}
function* watchGetBenefitsHistorys() {
  yield takeEvery(FETCHED_BENEFITS_HISTORYS, getBenefitsHistorys);
}
function* watchRemoveBenefitsHistory() {
  yield takeEvery(REMOVED_BENEFIT_HISTORYS, removeBenefitsHistorys);
}
function* watchAddBenefitsHistory() {
  yield takeEvery(ADD_BENEFITS_HISTORY, addBenefitsHistory);
}

function* getBenefits() {
  try {
    const data = yield call(() => {
      return benefitsService.getBenefits().then(res => res);
    });
    yield put(fetchBenefitsSuccess(data.data.benefits));
  } catch (e) {
    console.log(e);
  }
}

function* addBenefit({ payload }) {
  try {
    yield call(benefitsService.addBenefit, payload);
  } catch (e) {
    console.log("error", e);
  }
}

function* removeBenefit({ payload }) {
  try {
    const result = yield call(benefitsService.deleteBenefit, payload);
    console.log("result", result);
    if (result.status === 201) {
      yield call(getBenefits);
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* editBenefit({ payload }) {
  try {
    const result = yield call(benefitsService.editBenefit, payload);

    if (result.status === 200) {
      yield call(getBenefits);
    }
  } catch (e) {
    console.log("e", e);
  }
}

function* getBenefitsHistorys() {
  try {
    const data = yield call(() => {
      return benefitsService.getBenefitsHistorys().then(res => res);
    });
    yield put(fetchBenefitsHistorysSuccess(data.data.benHistory));
  } catch (e) {
    console.log(e);
  }
}
function* removeBenefitsHistorys({ payload }) {
  try {
    const result = yield call(benefitsService.deleteBenefitsHistory, payload);
    if (result.status === 201) {
      yield call(getBenefitsHistorys);
    }
  } catch (e) {
    console.log("e", e);
  }
}
function* addBenefitsHistory({ payload }) {
  try {
    yield call(benefitsService.addBenefitsHistory, payload);
  } catch (e) {
    console.log("error", e);
  }
}

export {
  watchGetBenefits,
  watchAddBenefit,
  watchEditBenefit,
  watchRemoveBenefit,
  watchGetBenefitsHistorys,
  watchRemoveBenefitsHistory,
  watchAddBenefitsHistory
};
