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
          <Product
            title="Echo Dot with The Child stand"
            price="79.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w758._SY608_CB406624432_.jpg"
            rating={5}
          />
          <Product
            title="Go wild with trendy prints"
            price="29.00"
            image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="The new Halo wellness band"
            price="64.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w758._SY608_CB406527709_.jpg"
            rating={5}
          />
          <Product
            title="Deals on apparel in Outlet"
            price="9.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_Coupons_DSC_758x608._SY608_CB429449198_.jpg"
            rating={5}
          />
          <Product
            title="Shop medical supplies"
            price="49.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Health_x26_Personal_Care/XCM_Manual_1239353_1269289_US_us_health_personal_care_consumables_desktop_cat_card_hpc_1237578_2_3240978_758x608_2X_en_US._SY608_CB408425348_.jpg"
            rating={5}
          />
          <Product
            title="Deals on overstock shoes"
            price="14.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_SH_758x608_B07Z4CP5K1_920fe539._SY608_CB406458921_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Gabrielle Union's Flawless Collection"
            price="9.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61QPh3J65iL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Protect your home with Flo by Moen"
            price="49.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDQxZWMzNmQt/NDQxZWMzNmQt-NTg5MjhlYWUt-w758._SY608_CB407437045_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
