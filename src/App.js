import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';

import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// public key
const promise = loadStripe(
  'pk_test_51HPvyOHWgAakhkXvbvihEYVXXrcZM1uD7LluF0dSZooVYF1NRsbh4CCTJPqFz0EO7oo4Ulu2YtiF4aKitO1rDwrL00xtLEMal7'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // listen for changes
    auth.onAuthStateChanged((authUser) => {
      console.log('The user', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* render home, header on / route  */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
