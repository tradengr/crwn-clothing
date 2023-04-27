import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './CheckoutItem.styles.scss';

export default function CheckoutItem({ item }) {
  const { imageUrl, name, quantity, price } = item;
  const disptach = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddItemToCart = () => disptach(addItemToCart(item, cartItems));
  const handleReduceItemFromCart = () => disptach(reduceItemFromCart(item, cartItems));
  const handleRemoveItemFromCart = () => disptach(removeItemFromCart(item, cartItems));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name}/>
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span className='arrow' onClick={handleReduceItemFromCart}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={handleAddItemToCart}>&#10095;</span>
      </div>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={handleRemoveItemFromCart}>&#10005;</span>
    </div>
  )
}
