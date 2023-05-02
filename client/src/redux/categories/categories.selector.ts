import { createSelector } from 'reselect';

import type { RootState } from '../store';
import { CategoriesState } from './categories.slice';

const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategoriesObj = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesObj
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);