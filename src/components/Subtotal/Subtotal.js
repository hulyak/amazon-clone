import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../StateProvider';

function Subtotal() {

  const [{basket}, dispatch] = useStateValue();
  console.log(basket);

  const totalPrice = basket.reduce((prev, current) => prev + Number(current.price), 0);
  
  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>Subtotal ({basket.length}):
            <strong> {`${totalPrice}`} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
            </small>
        </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandsSeperator={true}
        prefix={"$"}
      />
      
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
