import { useSelector } from "react-redux";

import CategoryPreview from "../../components/categoryPreview/CategoryPreview.component";
import Spinner from "../../components/spinner/spinner.component";

import { selectCategoriesObj, selectCategoriesIsLoading } from "../../redux/categories/categories.selector";

export default function CategoriesPreview() {
  const categoriesObj = useSelector(selectCategoriesObj);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {categoriesIsLoading
        ? <Spinner/>
        : Object.keys(categoriesObj).map(category => (
            <CategoryPreview 
              key={category} 
              category={category} 
              products={categoriesObj[category]}
            />
          ))
      }
    </>
  )
}
