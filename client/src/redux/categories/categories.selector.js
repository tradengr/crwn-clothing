import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesObj = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesObj
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
)