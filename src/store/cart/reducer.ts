import { Reducer } from 'redux'

import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  REMOVE_ITEM,
  REMOVE_ITEM_FROM_CART
} from './constants'
import { addItemToCart, removeItemFromCart } from './utils'

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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}
