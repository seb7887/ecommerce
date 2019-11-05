import React from 'react'
import { Link } from 'react-router-dom'
import { useMappedState } from 'redux-react-hook'

import logo from '../../assets/images/crown.svg'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
import { ReduxState } from '../../types'
import { selectCurrentUser } from '../../store/users'
import { selectHidden } from '../../store/cart'

interface Props {
  onSignOut: () => void
}

const mapState = (state: ReduxState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHidden(state)
})

const Header: React.FC<Props> = ({ onSignOut }) => {
  const { currentUser, hidden } = useMappedState(mapState)

  return (
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
      {!hidden && <CartDropdown />}
    </div>
  )
}

export default Header
