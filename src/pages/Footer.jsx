import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/shipping-policy">Shipping Policy</Link>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <Link to="/cancellations-and-refunds">Cancellations & Refunds</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BhatkaYatri. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
