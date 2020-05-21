import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) => {
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_A3BV4nKGdoo2a6ZDXzLbprGJ00FBvTsq9E';

  const onToken = token  => {
    console.log({token});
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='FRIMMY Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckOutButton;
