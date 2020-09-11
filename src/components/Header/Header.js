import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import {auth} from '../../firebase'

function Header() {
  //  pull info 
  const [{basket, user}, dispatch] = useStateValue();
  
  // sign out the user
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      {/* hyperlink to home page */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* if there is no user push to /login */}
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">Hello, {user ?  user.email : 'Guest'}</span>
            <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign In'}</span> 
          </div>
        </Link>

        <Link to='orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {/* conditional rendering */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
