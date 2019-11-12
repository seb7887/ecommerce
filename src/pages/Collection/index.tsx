import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useMappedState } from 'redux-react-hook'

import { selectCollection } from '../../store/shop'
import { ReduxState } from '../../types'
import { CollectionItem } from '../../components'

interface Props extends RouteComponentProps<any> {}

const Collection: React.FC<Props> = props => {
  const mapState = useCallback(
    (state: ReduxState) => ({
      collection: selectCollection(props.match.params.collectionId)(state)
    }),
    [props]
  )
  const { collection } = useMappedState(mapState)

  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Collection
