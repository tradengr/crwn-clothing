import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/productCard/ProductCard.component";

import './Category.styles.scss';

export default function Category() {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  },[category, categories])

  return (
    <div className="category-container">
      <h2 className="title">{category}</h2>
      <div className="products-container">
        {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}
