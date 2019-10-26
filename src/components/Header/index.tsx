import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/crown.svg'

interface Props {
  currentUser: User | null
  onSignOut: () => void
}

const Header: React.FC<Props> = ({ currentUser, onSignOut }) => (
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
    </div>
  </div>
)

export default Header
