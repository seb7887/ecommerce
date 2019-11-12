import React from 'react'
import { useMappedState } from 'redux-react-hook'

import CollectionPreview from '../CollectionPreview'
import { selectCollectionsForPreview } from '../../store/shop'
import { ReduxState } from '../../types'

const mapState = (state: ReduxState) => ({
  collections: selectCollectionsForPreview(state)
})

const CollectionsOverview: React.FC = () => {
  const { collections } = useMappedState(mapState)

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview
