import { ADD, DELETE } from "./actionTypes";

export const addBooking = (payload) => {
  return {
    type: ADD,
    payload: {
      ...payload,
    },
  };
};

export const deleteBooking = (index) => {
  return {
    type: DELETE,
    payload: {
      index: index,
    },
  };
};
