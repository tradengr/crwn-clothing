import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categoriesObj: {}
};

export const categoriesReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {...state, categoriesObj: payload};
    default:
      return state;
  }
}