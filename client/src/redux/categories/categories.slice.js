import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpGetCategories } from '../../api/serverAPI';

const initialState   = {
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
  initialState,
  extraReducers: (builder) => {
    const {pending, fulfilled, rejected} = getCategories;
    builder
      .addCase(pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoriesObj = action.payload;
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const categoriesReducer = categoriesSlice.reducer;