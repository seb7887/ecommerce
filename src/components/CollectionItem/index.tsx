import React from 'react'
import { useDispatch } from 'redux-react-hook'

import Button from '../Button'
import { addItem } from '../../store/cart'

interface Props {
  item: ItemData
}

const CollectionItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <Button
        buttontype="inverted"
        onClick={() => dispatch(addItem(item as CartItem))}
      >
        Add to Cart
      </Button>
    </div>
  )
}

export default CollectionItem
