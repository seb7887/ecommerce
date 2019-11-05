import React from 'react'

interface Props {
  item: CartItem
}

const CartItem: React.FC<Props> = ({ item }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {item.quantity} x {item.price}
      </span>
    </div>
  </div>
)

export default CartItem
