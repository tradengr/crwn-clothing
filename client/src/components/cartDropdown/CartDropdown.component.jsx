import { useContext } from 'react';
import { Button } from '../button/Button.component';
import CartItem from '../cartItem/CartItem.component';

import './CartDropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';

export default function CartDropdown() {
  const {cartItems} = useContext(CartContext);
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  )
}
