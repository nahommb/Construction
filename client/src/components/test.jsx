import React, { useState } from 'react';
import axios from 'axios';

const ChapaPayment = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    console.log('hello')
    const apiUrl = 'https://api.chapa.co/v1/transaction/initialize';
    const apiKey = 'CHAPUBK_TEST-SViRXlP2rAnkzObtyzB5UIN5Ymj9QqhX'; // Replace with your Chapa API key

    const paymentData = {
      amount,
      currency: 'ETB',
      email,
      callback_url: 'http://localhost:3001/payment-success', // Replace with your callback URL
      return_url: 'http://localhost:3001/payment-complete', // Replace with your return URL
    };

    try {
      const response = await axios.post(apiUrl, paymentData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data)
      if (response.data.status === 'success') {
        window.location.href = response.data.data.checkout_url; // Redirect to Chapa checkout
      } else {
        setPaymentStatus('Payment initialization failed. Please try again.');
      }
    } catch (error) {
      console.error('Error initializing payment:', error);
      setPaymentStatus('Error initializing payment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Chapa Payment</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount (ETB):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default ChapaPayment;
