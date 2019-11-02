import React from 'react'
import { useMappedState } from 'redux-react-hook'

import cart from '../../assets/images/cart.svg'
import { ReduxState } from '../../types'
import { selectCartItemsCount } from '../../store/cart'

const mapState = (state: ReduxState) => ({
  itemCount: selectCartItemsCount(state)
})

const CartIcon: React.FC = () => {
  const { itemCount } = useMappedState(mapState)

  return (
    <div className="cart-icon">
      <img src={cart} alt="Cart" className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
