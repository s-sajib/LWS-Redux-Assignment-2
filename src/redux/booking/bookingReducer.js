import { ADD, DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      let duplicateState = [...state];
      delete duplicateState[action.payload.index];
      duplicateState = duplicateState.filter(
        (booking) => booking !== undefined
      );

      return duplicateState;

    default:
      return state;
  }
};

export default bookingReducer;
