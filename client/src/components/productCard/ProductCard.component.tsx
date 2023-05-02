import { useDispatch } from 'react-redux';

import { InvertedButton } from '../button/Button.component';

import { addItemToCart } from '../../redux/cart/cart.slice';

import './ProductCard.styles.scss';

import type { CategoryItem } from '../../redux/categories/categories.slice';

type ProductCardProps = {
  product: CategoryItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  
  const handleAddItemToCart = () => dispatch(addItemToCart(product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <InvertedButton onClick={handleAddItemToCart}>Add to Cart</InvertedButton>
    </div>
  )
}
