export const FETCH_BENEFITS_SUCCESS = "FETCH_BENEFITS_SUCCESS";
export const FETCHED_BENEFITS = "FETCHED_BENEFITS";
export const REMOVED_BENEFIT = "REMOVED_BENEFIT";
export const ADD_BENEFIT = "ADD_BENEFIT";
export const EDIT_BENEFIT = "EDIT_BENEFIT";

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
  console.log(payload);
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

export {
  fetchBenefitsSuccess,
  removedBenefit,
  fetchBenefits,
  addedBenefit,
  editBenefit
};
