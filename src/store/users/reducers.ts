import { Reducer } from 'redux'

import { SET_CURRENT_USER } from './constants'

interface UserState {
  currentUser: User | null
  error: 'string' | null
}

const initialState: UserState = {
  currentUser: null,
  error: null
}

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
