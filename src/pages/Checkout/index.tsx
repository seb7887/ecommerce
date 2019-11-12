import React from 'react'
import { useMappedState } from 'redux-react-hook'

import { CheckoutItem, StripeButton } from '../../components'
import { selectCartItems, selectCartTotal } from '../../store/cart'
import { ReduxState } from '../../types'

const mapState = (state: ReduxState) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
})

const Checkout: React.FC = () => {
  const { cartItems, total } = useMappedState(mapState)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        42424 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

export default Checkout
