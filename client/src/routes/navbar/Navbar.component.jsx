import { Link, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../../components/cartIcon/CartIcon.component";
import CartDropdown from "../../components/cartDropdown/CartDropdown.component";

import { userSignOut } from "../../redux/user/user.slice";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectIsCartOpen } from "../../redux/cart/cart.selector";

import './Navbar.styles.scss'

export default function Navbar() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = () => dispatch(userSignOut());

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {currentUser 
            ? (<Link className="nav-link" onClick={handleSignOut}>SIGN OUT</Link>) 
            : (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
          }
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </>
  )
}
