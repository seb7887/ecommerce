import { Reducer } from 'redux'

import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './constants'
import { addItemToCart } from './utils'

interface CartState {
  hidden: boolean
  cartItems: CartItem[]
}

const initialState: CartState = {
  hidden: true,
  cartItems: []
}

export const cartReducer: Reducer<CartState> = (
  state = initialState,
  action
): CartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}
