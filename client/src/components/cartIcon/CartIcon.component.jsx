import { useSelector, useDispatch } from 'react-redux';

import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import { selectIsCartOpen, selectCartCount } from '../../redux/cart/cart.selector';
import { toggleCart } from '../../redux/cart/cart.action';

import './CartIcon.styles.scss';

export default function CartIcon() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const handleToggleCart = () => dispatch(toggleCart(!isCartOpen));

  return (
    <div className='cart-icon-container' onClick={handleToggleCart}>
      <Icon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}
