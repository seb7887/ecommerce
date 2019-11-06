import { createAction } from 'typesafe-actions'

import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  REMOVE_ITEM,
  REMOVE_ITEM_FROM_CART
} from './constants'

export const toggleCartHidden = createAction(TOGGLE_CART_HIDDEN, resolve => {
  return () => resolve()
})

export const addItem = createAction(ADD_ITEM, resolve => {
  return (item: CartItem) => resolve(item)
})

export const removeItem = createAction(REMOVE_ITEM, resolve => {
  return (item: CartItem) => resolve(item)
})

export const removeItemFromCart = createAction(
  REMOVE_ITEM_FROM_CART,
  resolve => {
    return (item: CartItem) => resolve(item)
  }
)
