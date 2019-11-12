import { createSelector } from 'reselect'
import { ReduxState } from '../../types'

const selectShop = (state: ReduxState) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
