import { createSelector } from 'reselect'
import { ReduxState } from '../../types'

const selectCart = (state: ReduxState) => state.cart

export const selectHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
)