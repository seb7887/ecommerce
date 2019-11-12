import { Reducer } from 'redux'

import { UPDATE_COLLECTIONS } from './constants'

interface ShopState {
  collections: CollectionData | null
}

const initialState: ShopState = {
  collections: null
}

export const shopReducer: Reducer<ShopState> = (
  state = initialState,
  action
): ShopState => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}
