import axios from 'axios';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

import "./CheckoutPage.css"
import "./CheckoutPage-Header.css"

export function CheckoutPage({ cart,loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null); //null bcs paymentSummary is an object

  useEffect(() => {
    const fetchCheckOutData= async()=>{
      let response=await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(response.data)
    };
    fetchCheckOutData();
}, []); 
  useEffect(()=>{
    const fetchCheckOutData= async()=>{
      const response=await axios.get('/api/payment-summary')
      setPaymentSummary(response.data);
    };
    fetchCheckOutData();
  },[cart])
    // cart given bcs whenever the cart changes(like updating money bcs of adding delivery fee then the payment summary will be reloaded and calculate final price automatically)




  return (
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link"
              href="/">3 items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}