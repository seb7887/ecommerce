import React from 'react'
import { useDispatch } from 'redux-react-hook'

import { addItem, removeItem, removeItemFromCart } from '../../store/cart'

interface Props {
  cartItem: CartItem
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch()

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="Item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
