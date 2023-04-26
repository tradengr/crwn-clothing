import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../button/Button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cartItem/CartItem.component';

import './CartDropdown.styles.scss';

export default function CartDropdown() {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();
  const toCheckout = () => navigate('/checkout');

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length
          ? cartItems.map(item => <CartItem key={item.id} item={item}/>)
          : <span className='empty-message'>Your Cart is Empty</span>
        }
      </div>
      <Button onClick={toCheckout}>Go to Checkout</Button>
    </div>
  )
}
