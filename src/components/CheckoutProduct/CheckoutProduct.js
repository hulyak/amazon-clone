import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => <p>⭐️</p>)}
        </div>
        {/*  if the user in orders page don't show the button */}
        (!hideButton &&
        {<button onClick={removeFromBasket}>Remove from basket</button>})
      </div>
    </div>
  );
}

export default CheckoutProduct;