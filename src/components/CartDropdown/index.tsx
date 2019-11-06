import React from 'react'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'

import Button from '../Button'
import CartItem from '../CartItem'
import { ReduxState } from '../../types'
import { selectCartItems, toggleCartHidden } from '../../store/cart'

const mapState = (state: ReduxState) => ({
  cartItems: selectCartItems(state)
})

const CartDropdown: React.FC = () => {
  const { cartItems } = useMappedState(mapState)
  const dispatch = useDispatch()

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Link to="/checkout">
        <Button
          buttontype="normal"
          onClick={() => dispatch(toggleCartHidden())}
        >
          CHECKOUT!
        </Button>
      </Link>
    </div>
  )
}

export default CartDropdown
