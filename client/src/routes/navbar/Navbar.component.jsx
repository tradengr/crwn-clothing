import { Link, Outlet } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Navbar.styles.scss'

export default function Navbar() {
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
          <Link className="nav-link" to='/signin'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}
