import { combineReducers } from 'redux'

import { userReducer } from './users'
import { cartReducer } from './cart'

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})
