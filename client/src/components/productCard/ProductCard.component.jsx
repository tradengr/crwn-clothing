import { useContext } from 'react';

import { InvertedButton } from '../button/Button.component';
import { CartContext } from '../../contexts/cart.context';

import './ProductCard.styles.scss';

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  
  const handleAddItemToCart = () => addItemToCart(product);

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
