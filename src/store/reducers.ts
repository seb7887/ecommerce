import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer } from './users'
import { cartReducer } from './cart'
import { shopReducer } from './shop'
import { directoryReducer } from './directory'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)
