import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KV7r7SBKUSuYk4UzFUBjzV1DiYOaTN28Wkoc2acetRKey98yDSZO66OTtySJJGhQ4tXrnsXLEmvMmy4Bd6MMaMC00NNAwoV7PL';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');//token generated is sent to backend
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Kamaya Closet'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;