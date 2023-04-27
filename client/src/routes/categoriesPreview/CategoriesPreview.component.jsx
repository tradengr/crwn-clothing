import { useSelector } from "react-redux";

import { selectCategoriesObj } from "../../redux/categories/categories.selector";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview.component";

export default function CategoriesPreview() {
  const categoriesObj = useSelector(selectCategoriesObj);

  return (
    <>
      {Object.keys(categoriesObj).map(category => (
        <CategoryPreview 
          key={category} 
          category={category} 
          products={categoriesObj[category]}
        />
      ))}
    </>
  )
}
