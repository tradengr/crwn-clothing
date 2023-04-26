import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../../components/categoryPreview/CategoryPreview.component";

export default function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map(category => (
        <CategoryPreview 
          key={category} 
          category={category} 
          products={categories[category]}
        />
      ))}
    </>
  )
}
