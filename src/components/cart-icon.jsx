import React from 'react';
import { connect } from 'react-redux';
import { toggleFlag } from '../redux/cart/cart.actions';
import { selectCartItemsCount } from '../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import './cart-icon.scss';

const CartIcon = ({ toggleFlag, totalCount }) => (
  <div className='cart-icon' onClick={toggleFlag} role="button" aria-label="Toggle cart dropdown" tabIndex={0} onKeyPress={e => { if(e.key === 'Enter') toggleFlag(); }}>
    <img src="/assets/shopping-bag.svg" alt="Shopping Bag" className="shopping-icon emoji-bounce" />
    <span className='item-count pulse'>{totalCount}</span>
  </div>
);

const mapStatetoProps = createStructuredSelector({
  totalCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleFlag: () => dispatch(toggleFlag())
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
