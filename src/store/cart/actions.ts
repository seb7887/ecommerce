import { createAction } from 'typesafe-actions'

import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './constants'

export const toggleCartHidden = createAction(TOGGLE_CART_HIDDEN, resolve => {
  return () => resolve()
})

export const addItem = createAction(ADD_ITEM, resolve => {
  return (item: CartItem) => resolve({ item })
})
