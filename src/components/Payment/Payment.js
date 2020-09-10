import React, {useState, useEffect} from 'react';
import './Payment.css';
import {useStateValue} from '../../StateProvider';
import {Link, useHistory} from 'react-router-dom';
import axios from '../../axios'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../../reducer';

const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  // payment states
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'POST',
        //  stripe expects the total in a currencies subunits, 100 changes dollars to cents
        url: `/payments/create?total=${ getBasketTotal(basket) * 100 }`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket]);

  console.log('The secret is >>> ', clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      // paymentIntent = confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })
      // send user to orders page
      history.replace('/orders');
    })
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
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now" } </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
