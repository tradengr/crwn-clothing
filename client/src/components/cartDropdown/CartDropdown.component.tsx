import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartItem from '../cartItem/CartItem.component';

import { Button } from '../button/Button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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

export default CartDropdown;