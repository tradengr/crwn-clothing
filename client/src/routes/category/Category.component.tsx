import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";

import ProductCard from "../../components/productCard/ProductCard.component";
import Spinner from "../../components/spinner/spinner.component";

import { selectCategoriesObj, selectCategoriesIsLoading } from "../../redux/categories/categories.selector";

import './Category.styles.scss';

type CategoryRouteParams = {
  category: string;
}

export default function Category() {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesObj = useSelector(selectCategoriesObj);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesObj[category]);
  useEffect(() => {
    setProducts(categoriesObj[category]);
  },[category, categoriesObj])

  return (
    <div className="category-container">
      <h2 className="title">{category}</h2>
      {categoriesIsLoading
        ? <Spinner/>
        : <div className="products-container">
            {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
          </div>
      }
    </div>
  )
}
