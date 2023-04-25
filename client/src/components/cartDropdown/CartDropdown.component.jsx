import { Button } from '../button/Button.component';
import './CartDropdown.styles.scss';

export default function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>Go to Checkout</Button>
    </div>
  )
}
