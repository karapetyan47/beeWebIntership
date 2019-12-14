export const FETCH_BENEFITS_SUCCESS = "FETCH_BENEFITS_SUCCESS";
export const FETCHED_BENEFITS = "FETCHED_BENEFITS";
export const REMOVED_BENEFIT = "REMOVED_BENEFIT";
export const ADD_BENEFIT = "ADD_BENEFIT";
export const EDIT_BENEFIT = "EDIT_BENEFIT";
export const FETCHED_BENEFITS_HISTORYS = "FETCHED_BENEFITS_HISTORYS";
export const FETCH_BENEFITS_HISTORYS_SUCCESS =
  "FETCH_BENEFITS_HISTORYS_SUCCESS";
export const REMOVED_BENEFIT_HISTORYS = "REMOVED_BENEFIT_HISTORYS";
export const ADD_BENEFITS_HISTORY = "ADD_BENEFITS_HISTORY";
export const GET_BENEFIT = "GET_BENEFIT";
export const GET_BENEFIT_SUCCEED = "GET_BENEFIT_SUCCEED";

const fetchBenefitsSuccess = newBenefits => {
  return {
    type: FETCH_BENEFITS_SUCCESS,
    payload: newBenefits
  };
};

const removedBenefit = benefitId => {
  return {
    type: REMOVED_BENEFIT,
    payload: benefitId
  };
};

const editBenefit = payload => {
  return {
    type: EDIT_BENEFIT,
    payload: payload
  };
};

const addedBenefit = newBenefit => {
  return {
    type: ADD_BENEFIT,
    payload: newBenefit
  };
};

const fetchBenefits = () => {
  return {
    type: FETCHED_BENEFITS
  };
};

const getBenefit = id => {
  return {
    type: GET_BENEFIT,
    payload: id
  };
};

const getBenefitSucced = obj => {
  return {
    type: GET_BENEFIT_SUCCEED,
    payload: obj
  };
};

const fetchBenefitsHistorys = () => {
  return {
    type: FETCHED_BENEFITS_HISTORYS
  };
};

const fetchBenefitsHistorysSuccess = newBenefitsHistorys => {
  return {
    type: FETCH_BENEFITS_HISTORYS_SUCCESS,
    payload: newBenefitsHistorys
  };
};
const removedBenefitsHistorys = benefitsHistorysId => {
  return {
    type: REMOVED_BENEFIT_HISTORYS,
    payload: benefitsHistorysId
  };
};

const addedBenefitsHistory = newBenefitsHistory => {
  return {
    type: ADD_BENEFITS_HISTORY,
    payload: newBenefitsHistory
  };
};

export {
  fetchBenefitsSuccess,
  removedBenefit,
  fetchBenefits,
  addedBenefit,
  editBenefit,
  getBenefit,
  getBenefitSucced,
  fetchBenefitsHistorys,
  fetchBenefitsHistorysSuccess,
  removedBenefitsHistorys,
  addedBenefitsHistory
};
