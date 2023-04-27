import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categoriesPreview/CategoriesPreview.component';
import Category from '../category/Category.component';

import { httpGetCategories } from '../../api/serverAPI';
import { setCategories } from '../../redux/categories/categories.action';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    httpGetCategories().then(res => dispatch(setCategories(res.data)));
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}
