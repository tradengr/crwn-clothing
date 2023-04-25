import { useContext } from 'react';
import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const handleCartToggle = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={handleCartToggle}>
      <Icon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
}
