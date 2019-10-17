import React from 'react'

import CollectionItem from '../CollectionItem'

interface Props {
  title: string
  items: ItemData[]
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default CollectionPreview
