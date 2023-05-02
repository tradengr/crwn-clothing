import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { httpGetCategories } from '../../api/serverAPI';

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

type CategoriesObj = {
  [key: string]: CategoryItem[];
  // jackets: CategoryItem[];
  // womens: CategoryItem[];
  // mens: CategoryItem[];
  // sneakers: CategoryItem[];
  // hats: CategoryItem[];
}

export type CategoriesState = {
  categoriesObj: CategoriesObj;
  isLoading: boolean;
  error: Error | null | unknown;
}

const initialState: CategoriesState = {
  categoriesObj: {} as CategoriesObj,
  isLoading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const res = await httpGetCategories();
    const categories = res && res.data;
    return categories;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const {pending, fulfilled, rejected} = getCategories;
    builder
      .addCase(pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fulfilled, (state, action: PayloadAction<CategoriesObj>) => {
        state.isLoading = false;
        state.categoriesObj = action.payload;
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
});

export const categoriesReducer = categoriesSlice.reducer;