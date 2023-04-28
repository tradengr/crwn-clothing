import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpGetCategories } from '../../api/serverAPI';

const INITIAL_STATE = {
  categoriesObj: {},
  isLoading: false,
  error: null,
};

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
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoriesObj = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const categoriesReducer = categoriesSlice.reducer;