import React, { useState } from 'react';
import Select from 'react-select';
import './PayMentPage.scss';
import { useLocation } from 'react-router-dom';

const PaymentOptions = () => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [newCard, setNewCard] = useState({
    type: '',
    number: '',
    bank: '',
    owner: ''
  });
  const location = useLocation();
  const totalAmount = location.state?.total || 0;

  const dropdownOptions = [
    { label: 'PhonePe', value: 'phonepe' },
    { label: 'Google Pay', value: 'gpay' },
    { label: 'Paytm', value: 'paytm' },
  ];

  const savedCards = [
    { type: 'Visa', number: '0827', bank: 'IDFC FIRST Bank', owner: 'Surya sahu' },
    { type: 'Visa', number: '6191', bank: 'Kotak Mahindra Bank', owner: 'Kajal shahu' },
    { type: 'Visa', number: '4419', bank: 'HDFC Bank', owner: 'Sanjay Kumar Shahu' },
    { type: 'MasterCard', number: '1371', bank: 'State Bank of India', owner: 'Rajat Barman', expired: true },
    { type: 'MasterCard', number: '0245', bank: 'HDFC Bank', owner: 'Pooja shahu' },
    { type: 'MasterCard', number: '2664', bank: 'HDFC Bank', owner: 'Kamal kumar' },
    { type: 'MasterCard', number: '9878', bank: 'Axis Bank', owner: 'Maya Devi' },
  ];

  const handleCardInput = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
  };

  const submitNewCard = () => {
    alert(`Card added: ${newCard.type} ${newCard.number}`);
    setShowCardForm(false);
  };

  return (
    <>
    <p>Total to be paid: <strong>Rs {totalAmount}</strong></p>
    <div className="payment-options">
      <h2>Your available balance</h2>
      <p className="wallet-balance">
        Use your <strong>160.88</strong> bhatka wallet Balance
      </p>
      <div className="insufficient-balance">
        <p>Insufficient balance.</p>
        <button>Add money & get rewarded</button>
      </div>

      <hr />

      <div className="promo-code">
        <input type="text" placeholder="Enter Code" />
        <button>Apply</button>
      </div>

      <hr />

      <h3>CREDIT & DEBIT CARDS</h3>
      <div className="cards-grid">
        {savedCards.map((card, index) => (
          <div key={index} className={`card-box ${card.expired ? 'expired' : ''}`}>
            <p className="card-type">
              {card.type} ending in {card.number}
            </p>
            <p className="card-bank">{card.bank} {card.type === 'Visa' ? 'Credit' : 'Debit'} Card</p>
            <p className="card-owner">{card.owner}</p>
            {card.expired && (
              <p className="expired-msg">
                Card is no longer saved with us. <button>Add again</button>
              </p>
            )}
          </div>
        ))}
      </div>

      <hr />

      <h3>Another payment method</h3>
      <div className="other-methods">
        <ul>
          <li><button onClick={() => setShowCardForm(true)}>Add Credit or debit card</button></li>
          <li>Add Net Banking</li>
          <li><Select options={dropdownOptions} placeholder="Choose UPI App" /></li>
          <li><Select options={dropdownOptions} placeholder="Choose Net Banking Option" /></li>
          <li>Other UPI Apps</li>
          <li>EMI Unavailable <span className="info">Why?</span></li>
          <li>Cash on Delivery/Pay on Delivery</li>
          <li>Cash on Delivery/Pay on Delivery</li>
        </ul>
        <p className="cash-note">
          Cash, UPI and Cards accepted. <button>Know more</button>
        </p>
      </div>

      {showCardForm && (
        <div className="modal">
          <div className="modal-content">
            <h4>Add New Card</h4>
            <input name="type" placeholder="Card Type (Visa/MasterCard)" onChange={handleCardInput} />
            <input name="number" placeholder="Card Number" onChange={handleCardInput} />
            <input name="bank" placeholder="Bank Name" onChange={handleCardInput} />
            <input name="owner" placeholder="Cardholder Name" onChange={handleCardInput} />
            <div className="actions">
              <button onClick={submitNewCard}>Add Card</button>
              <button onClick={() => setShowCardForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default PaymentOptions;
