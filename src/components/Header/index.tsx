import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/crown.svg'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'

interface Props {
  currentUser: User | null
  hidden: boolean
  onSignOut: () => void
}

const Header: React.FC<Props> = ({ currentUser, hidden, onSignOut }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} alt="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/">
        CONTACT
      </Link>
      {!currentUser ? (
        <Link className="option" to="/login">
          SIGN IN
        </Link>
      ) : (
        <div className="option" onClick={onSignOut}>
          SIGN OUT
        </div>
      )}
      <CartIcon />
    </div>
    {hidden && <CartDropdown />}
  </div>
)

export default Header
