import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context';

import './CheckoutItem.styles.scss';

export default function CheckoutItem({ item }) {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } = useContext(CartContext);

  const handleAddItemToCart = () => addItemToCart(item);
  const handleReduceItemFromCart = () => reduceItemFromCart(item);
  const handleRemoveItemFromCart = () => removeItemFromCart(item);

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