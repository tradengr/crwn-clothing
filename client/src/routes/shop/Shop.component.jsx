import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

import { getCategories } from '../../redux/categories/categories.slice';

const CategoriesPreview = lazy(() => import('../categoriesPreview/CategoriesPreview.component'));
const Category = lazy(() => import('../category/Category.component'));

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>}/>
      </Routes>
    </Suspense>
  )
}
