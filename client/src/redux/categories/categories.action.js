import { CATEGORIES_ACTION_TYPES } from "./categories.types"
import { httpGetCategories } from "../../api/serverAPI";

const fetchCategoriesStart = () => {
  return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START};
}

const fetchCategoriesSuccess = (categoriesObj) => {
  return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesObj};
}

const fetchCategoriesFailed = (error) => {
  return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, payload: error};
}

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const res = await httpGetCategories();
    dispatch(fetchCategoriesSuccess(res.data));
  } catch (err) {
    dispatch(fetchCategoriesFailed(err));
  }
}