import { createSelector } from 'reselect'
import { ReduxState } from '../../types'

const selectDirectory = (state: ReduxState) => state.directory

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)
