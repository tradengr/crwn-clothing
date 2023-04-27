import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categoriesObj: {},
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {...state, isLoading: true};
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {...state, isLoading: false, categoriesObj: payload};
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {...state, isLoading:false, error: payload};
    default:
      return state;
  }
}