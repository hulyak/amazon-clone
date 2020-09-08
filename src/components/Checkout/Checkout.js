import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/slsm/slsm_header-desktop_01_1500x300_v5.png"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
