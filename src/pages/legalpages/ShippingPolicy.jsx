import React from 'react';
import './styles/shipping-policy.scss';

const ShippingPolicy = () => (
  <div className="legal-page shipping-policy">
    <h1>Shipping Policy</h1>

    <p><strong>Delivery Timeline:</strong> Orders are dispatched within 1–3 business days. Delivery time may vary by location.</p>

    <p><strong>Shipping Charges:</strong></p>
    <ul>
      <li>Free shipping for orders above ₹499</li>
      <li>₹50 for orders below ₹499</li>
    </ul>

    <p><strong>Serviceable Areas:</strong> We ship to most locations in India. Some remote areas may take longer.</p>

    <p><strong>Order Tracking:</strong> A tracking link will be shared via SMS or email once your order is shipped.</p>
  </div>
);

export default ShippingPolicy;
