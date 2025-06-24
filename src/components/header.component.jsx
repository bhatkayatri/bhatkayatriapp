import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './cart-icon';
import CartDropdown from './cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selector';
import { selectCartHidden } from '../redux/cart/cart.selector';
import { hideCart } from '../redux/cart/cart.actions';
import './header.scss';

const Header = ({ currentUser, hidden, hideCart }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        hideCart();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        hideCart();
      }
    };

    if (!hidden) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [hidden, hideCart]);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src="/assets/bylogo.svg" alt="Logo" className='logo' />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          <span className="emoji-bounce">🎒</span> Apna Samaan, Apni Yatra ~ shop
        </Link>
        <Link className='option' to='/shop'>
          <span className="emoji-bounce">📬</span> Sandesh Bhejo, Duniya Chhodo ~ contact
        </Link>
        {
          currentUser
            ? <div className='option' onClick={() => auth.signOut()}>
                <span className="emoji-bounce">🌙</span> Thoda Aaram, Phir Safar ~ signOut
              </div>
            : <Link className='option' to="/signinnup">
                <span className="emoji-bounce">🚀</span> Chalo, Nikal Pade! ~ signinnup
              </Link>
        }

        {/* Cart Icon and Dropdown */}
        <div className="cart-icon-wrapper" ref={dropdownRef}>
          <CartIcon />
          {!hidden && <CartDropdown />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = {
  hideCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
