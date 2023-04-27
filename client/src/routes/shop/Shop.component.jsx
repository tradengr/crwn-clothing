import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categoriesPreview/CategoriesPreview.component';
import Category from '../category/Category.component';

import { getCategories } from '../../redux/categories/categories.slice';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}
