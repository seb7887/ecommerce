import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

interface Props {
  price: number
}

const StripeButton: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = process.env.STRIPE_KEY as string

  const onToken = (token: any) => {
    console.log(token)
    alert('Payment Successfull')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
