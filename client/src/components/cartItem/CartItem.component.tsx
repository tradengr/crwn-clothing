import { memo } from 'react';

import './CartItem.styles.scss';

import type { CartItem } from '../../redux/cart/cart.slice';

type CartItemProps = {
  item: CartItem;
}

const CartItem = memo(({ item }: CartItemProps) => {
  const { name, quantity, imageUrl, price } = item;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
});

export default CartItem;