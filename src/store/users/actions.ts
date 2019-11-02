import { createAction } from 'typesafe-actions'

import { SET_CURRENT_USER } from './constants'

export const setCurrentUser = createAction(SET_CURRENT_USER, resolve => {
  return (user: Partial<User> | null) => resolve({ user })
})
