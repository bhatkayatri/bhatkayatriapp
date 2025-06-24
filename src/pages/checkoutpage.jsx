import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import CheckoutItem from '../components/checkout-item';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selector';

import './checkoutpage.scss';

const CheckoutPage = ({ cartItems, total }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to PaymentOptions route and pass total
    navigate('/payment', { state: { total } });
  };

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'><span>Product</span></div>
        <div className='header-block'><span>Description</span></div>
        <div className='header-block'><span>Quantity</span></div>
        <div className='header-block'><span>Price</span></div>
        <div className='header-block'><span>Remove</span></div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: Rs{total}</div>
{/* //easiest way */}
<button
  className="pay-now-btn"
  onClick={() => window.open("https://razorpay.me/@bhatkayatri", "_blank")}
>
  Pay Rs {total} via Razorpay
</button>
<p style={{ fontSize: '14px', color: '#777' }}>
  Please enter this total amount manually when prompted on the payment page.
</p>

    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStatetoProps)(CheckoutPage);
