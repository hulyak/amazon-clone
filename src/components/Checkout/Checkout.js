import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {useStateValue} from '../../StateProvider';
// import FlipMove from 'react-flip-move';

const Checkout = () =>  {
  const [{basket, user}, dispatch] = useStateValue();

  //   const customEnterAnimation = {
  //   from: { transform: 'scale(0.5, 1)' },
  //   to:   { transform: 'scale(1, 1)' }
  // };
  
  //   const customLeaveAnimation = {
  //   from: { transform: 'scale(1, 1)' },
  //   to:   { transform: 'scale(0.5, 1) translateY(-20px)' }
  //   };
  
  return (
    <div className="checkout" >
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/slsm/slsm_header-desktop_01_1500x300_v5.png"
          alt=""
        />

        <div>
          {/* conditional chaining if it takes time to load */}
          <h3>Hello, {user?.email} </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* <FlipMove
            duration={500}
            delay={10}
            easing={'cubic-bezier(0.25, 0.5, 0.75, 1)'}
            staggerDurationBy={30}
            staggerDelayBy={10}
            staggerDurationBy={30}
            leaveAnimation={customLeaveAnimation}
            enterAnimation= {customEnterAnimation}
          > */}
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* </FlipMove> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
