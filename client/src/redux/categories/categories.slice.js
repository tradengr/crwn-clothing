// import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  categoriesObj: {}
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categoriesObj = action.payload
    }
  }
});

export const categoriesReducer = categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;

// export const categoriesReducer = (state=INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch(type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return {...state, categoriesObj: payload};
//     default:
//       return state;
//   }
// }