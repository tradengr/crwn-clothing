// import SHOP_DATA from '../../shop-data.json';

import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/productCard/ProductCard.component";

import './Shop.styles.scss';

export default function Shop() {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {categories.map(product => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        )
      })}
    </div>
  )
}
