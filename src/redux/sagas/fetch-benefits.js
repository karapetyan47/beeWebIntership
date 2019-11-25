import { call, put, takeEvery } from "redux-saga/effects";
import BenefitsServices from "../../services/benefits-services";
import { FETCHED_BENEFITS, fetchBenefitsSuccess } from "../actions";
import {
  REMOVED_BENEFIT,
  EDIT_BENEFIT,
  ADD_BENEFIT
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
    yield call(benefitsService.deleteBenefit, payload);
    let data = yield call(() => {
      return benefitsService.getBenefits().then(res => res);
    });
    data = yield call(() => {
      return benefitsService.getBenefits().then(res => res);
    });

    yield put(fetchBenefitsSuccess(data.data.benefits));
  } catch (e) {
    console.log("e", e);
  }
}

function* editBenefit({ payload }) {
  try {
    console.log("edit");
    yield call(benefitsService.editBenefit, payload);
    let data = yield call(() => {
      return benefitsService.getBenefits().then(res => res);
    });

    data = yield call(() => {
      return benefitsService.getBenefits().then(res => res);
    });

    yield put(fetchBenefitsSuccess(data.data.benefits));
  } catch (e) {
    console.log("e", e);
  }
}

export {
  watchGetBenefits,
  watchAddBenefit,
  watchEditBenefit,
  watchRemoveBenefit
};
