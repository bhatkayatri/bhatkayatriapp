import React from 'react';
import './styles/privacy-policy.scss';
const PrivacyPolicy = () => (
  <div className="legal-page">
    <h1>Privacy Policy</h1>
    <p>We respect your privacy and are committed to protecting your personal data.</p>
    
    <h2>What We Collect</h2>
    <ul>
      <li>Name, email, phone, and shipping address</li>
      <li>Order and payment details (via secure gateways)</li>
    </ul>

    <h2>How We Use It</h2>
    <ul>
      <li>To process and deliver your orders</li>
      <li>To notify you about updates, offers, and delivery status</li>
    </ul>

    <h2>Third-Party Access</h2>
    <p>We share your information only with logistics and payment partners required to fulfill your order.</p>

    <p>To request data removal or updates, email: <a href="mailto:privacy@bhatkayatri.com">privacy@bhatkayatri.com</a></p>
  </div>
);

export default PrivacyPolicy;
