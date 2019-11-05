import React from 'react'
import { useMappedState } from 'redux-react-hook'

import Button from '../Button'
import CartItem from '../CartItem'
import { ReduxState } from '../../types'
import { selectCartItems } from '../../store/cart'

const mapState = (state: ReduxState) => ({
  cartItems: selectCartItems(state)
})

const CartDropdown: React.FC = () => {
  const { cartItems } = useMappedState(mapState)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button buttontype="normal">CHECKOUT!</Button>
    </div>
  )
}

export default CartDropdown
