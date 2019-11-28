export const FETCH_POSITIONS_SUCCESS = "FETCH_POSITIONS_SUCCESS";
export const FETCHED_POSITIONS = "FETCHED_POSITIONS";
export const REMOVED_POSITION = "REMOVED_POSITION";
export const ADD_POSITION = "ADD_POSITION";
export const EDIT_POSITION = "EDIT_POSITION";

const fetchPositionsSuccess = newPositions => {
  return {
    type: FETCH_POSITIONS_SUCCESS,
    payload: newPositions
  };
};

const removedPosition = positionId => {
  return {
    type: REMOVED_POSITION,
    payload: positionId
  };
};

const editPosition = payload => {
  return {
    type: EDIT_POSITION,
    payload: payload
  };
};

const addedPosition = newPosition => {
  return {
    type: ADD_POSITION,
    payload: newPosition
  };
};

const fetchPositions = () => {
  return {
    type: FETCHED_POSITIONS
  };
};

export {
  fetchPositionsSuccess,
  removedPosition,
  fetchPositions,
  addedPosition,
  editPosition
};
