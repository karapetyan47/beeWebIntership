export const FETCH_CANDIDATS_SUCCESS = "FETCH_CANDIDATS_SUCCESS";
export const FETCHED_CANDIDATS = "FETCHED_CANDIDATS";
export const REMOVED_CANDIDAT = "REMOVED_CANDIDAT";
export const ADD_CANDIDAT = "ADD_CANDIDAT";
export const EDIT_CANDIDAT = "EDIT_CANDIDAT";

const fetchCandidatsSuccess = newCandidats => {
  return {
    type: FETCH_CANDIDATS_SUCCESS,
    payload: newCandidats
  };
};

const removedCandidat = candidatId => {
  return {
    type: REMOVED_CANDIDAT,
    payload: candidatId
  };
};

const editCandidat = payload => {
  return {
    type: EDIT_CANDIDAT,
    payload: payload
  };
};

const addedCandidat = newCandidat => {
  return {
    type: ADD_CANDIDAT,
    payload: newCandidat
  };
};

const fetchCandidats = () => {
  return {
    type: FETCHED_CANDIDATS
  };
};

export {
  fetchCandidatsSuccess,
  removedCandidat,
  fetchCandidats,
  addedCandidat,
  editCandidat
};
