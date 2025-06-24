import React from 'react';
import './styles/cancellations-and-refunds.scss';

const CancellationsAndRefunds = () => (
  <div className="legal-page cancellations-and-refunds">
    <h1>Cancellations and Refunds</h1>

    <h2>Order Cancellations</h2>
    <p>Orders can be cancelled within 6 hours if not yet shipped. Contact support with your order ID.</p>

    <h2>Refunds</h2>
    <ul>
      <li>Refunds are issued to the original payment method within 5–7 business days.</li>
      <li>COD refunds will be transferred via bank after confirmation.</li>
    </ul>

    <h2>Returns</h2>
    <div className="returns-section">
      <p>We accept returns for damaged or incorrect items only. Report within 48 hours with clear photos.</p>
    </div>
  </div>
);

export default CancellationsAndRefunds;
