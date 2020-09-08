import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Echo Dot with The Child stand</p>
        <p className="product__price">
          <small>$</small>
          <strong>79.99</strong>
        </p>

        <div className="product__rating">
          <p>⭐️</p>
          {/* <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p> */}
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w758._SY608_CB406624432_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
