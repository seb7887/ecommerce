import React, { useState, useEffect } from 'react'

import SHOP_DATA from '../../shop-data'

import { CollectionPreview } from '../../components'

const Shop: React.FC = () => {
  const [collections, setCollections] = useState<ShopData[]>([])

  useEffect(() => {
    setCollections(SHOP_DATA)
  }, [])

  return (
    <div className="shop">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Shop
