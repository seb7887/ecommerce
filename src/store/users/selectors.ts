import { createSelector } from 'reselect'
import { ReduxState } from '../../types'

const selectUser = (state: ReduxState) => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)
