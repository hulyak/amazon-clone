import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_3000x1200_PRE_Final_en-US_PVD5224._CB410800060_.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATA__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product />
        </div>

        {/* <div className="home__row">

        </div>

        <div className="home__row">

        </div> */}
      </div>
    </div>
  );
}

export default Home;
