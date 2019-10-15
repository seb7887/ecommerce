import React from 'react'

interface Props {
  title: string
  items: ItemData[]
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <title className="title">Title</title>
    <div className="preview">
      {items.map(item => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  </div>
)

export default CollectionPreview
