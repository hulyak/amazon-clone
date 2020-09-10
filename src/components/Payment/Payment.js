import React, {useState} from 'react';
import './Payment.css';
import {useStateValue} from '../../StateProvider';
import {Link} from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../../reducer';

const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  // payment states
  const [error, setError] = useState(null);
  const [ disabled, setDisabled] = useState(true)

  const handleSubmit = (e) => {

  }

  const handleChange = (event) => {
  // listen for changes in the CardElement
  // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "")
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout"> {basket?.length} items</Link>
        )
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {/* in case user is undefined ? */}
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe payment processing */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat 
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)} 
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
