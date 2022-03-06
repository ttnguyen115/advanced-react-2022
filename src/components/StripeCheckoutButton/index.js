import React from 'react'
import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout';
import './index.scss';

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KaMHIJc9rScA1Fb8rX9H51cahLih3GEwCPyAZvBX8imimxjkskxWQJHLqGcYYDerQ26I2bYFCET9irffQGAWfYt00VwGOv8UB';
  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Jett Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
}

export default StripeCheckoutButton
