import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";

import ProductCard from "../../components/productCard/ProductCard.component";
import { selectCategoriesObj } from "../../redux/categories/categories.selector";

import './Category.styles.scss';

export default function Category() {
  const { category } = useParams();
  const categoriesObj = useSelector(selectCategoriesObj);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesObj[category]);
  },[category, categoriesObj])


  return (
    <div className="category-container">
      <h2 className="title">{category}</h2>
      <div className="products-container">
        {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}