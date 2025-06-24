import React from 'react';
import './cart-dropdown.scss';

import CustomButton from './custom-button';
import CartItem from './cart-item';

import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cart.selector';
import { toggleFlag } from '../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate('/checkout');
    dispatch(toggleFlag());
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleGoToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
