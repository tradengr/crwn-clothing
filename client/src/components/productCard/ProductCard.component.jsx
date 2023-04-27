import { useDispatch, useSelector } from 'react-redux';

import { InvertedButton } from '../button/Button.component';

import { addItemToCart } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './ProductCard.styles.scss';

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  const handleAddItemToCart = () => dispatch(addItemToCart(product, cartItems));

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
