import { useDispatch } from 'react-redux';

import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../../redux/cart/cart.slice';

import './CheckoutItem.styles.scss';

import { CartItem } from '../../redux/cart/cart.slice';

type CheckoutItemProps = {
  item: CartItem;
}

export default function CheckoutItem({ item }: CheckoutItemProps) {
  const { imageUrl, name, quantity, price } = item;
  const disptach = useDispatch();

  const handleAddItemToCart = () => disptach(addItemToCart(item));
  const handleReduceItemFromCart = () => disptach(reduceItemFromCart(item));
  const handleRemoveItemFromCart = () => disptach(removeItemFromCart(item));

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
