import { createAction } from 'typesafe-actions'

import { UPDATE_COLLECTIONS } from './constants'

export const updateCollections = createAction(UPDATE_COLLECTIONS, resolve => {
  return (collectionsMap: CollectionData) => resolve(collectionsMap)
})
