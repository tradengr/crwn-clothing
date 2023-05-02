import { Link } from 'react-router-dom';

import ProductCard from '../productCard/ProductCard.component';

import './CategoryPreview.styles.scss';

import type { CategoryItem } from '../../redux/categories/categories.slice';

type CategoryPreviewProps = {
  category: string;
  products: CategoryItem[];
}

export default function CategoryPreview({ category, products }: CategoryPreviewProps) {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={category}> {category} </Link>
      </h2>
      <div className='preview'>
        {products.slice(0, 4).map(product => <ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}
