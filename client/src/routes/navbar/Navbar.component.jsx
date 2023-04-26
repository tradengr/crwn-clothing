import { useContext } from "react";
import { Link, Outlet } from "react-router-dom"

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../../components/cartIcon/CartIcon.component";
import CartDropdown from "../../components/cartDropdown/CartDropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { httpSignOutUser } from "../../api/serverAPI";

import './Navbar.styles.scss'

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
            ? (<Link className="nav-link" onClick={httpSignOutUser}>SIGN OUT</Link>) 
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
