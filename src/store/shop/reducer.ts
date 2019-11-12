import { Reducer } from 'redux'

import { SHOP_DATA } from './data'

interface ShopState {
  collections: CollectionData
}

const initialState: ShopState = {
  collections: SHOP_DATA
}

export const shopReducer: Reducer<ShopState> = (
  state = initialState,
  action
): ShopState => {
  switch (action.type) {
    default:
      return state
  }
}
