import { createSelector } from 'reselect';

import { CategoriesState } from './categories.slice';

import { RootState } from '../rootReducer';

const selectCategoriesReducer = (state): CategoriesState => state.categories;

export const selectCategoriesObj = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesObj
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);