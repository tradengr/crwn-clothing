import { useContext } from 'react';
import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

export default function CartIcon() {
  const { toggleCart, cartCount } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <Icon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}
