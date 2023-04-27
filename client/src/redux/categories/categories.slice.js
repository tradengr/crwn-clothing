// import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpGetCategories } from '../../api/serverAPI';

const INITIAL_STATE = {
  categoriesObj: {},
  isLoading: false,
  error: null,
};

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: INITIAL_STATE,
//   reducers: {
//     setCategories(state, action) {
//       state.categoriesObj = action.payload
//     }
//   }
// });

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const res = await httpGetCategories();
    const categories = res.data;
    return categories;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categoriesObj = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const categoriesReducer = categoriesSlice.reducer;
// export const { setCategories } = categoriesSlice.actions;

// export const categoriesReducer = (state=INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch(type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return {...state, categoriesObj: payload};
//     default:
//       return state;
//   }
// }