import React, { useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home">
      <div className="home__container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDQxYmY0MTYt/ZDQxYmY0MTYt-YTA3MjZjYWMt-w1500._CB404947428_.jpg"
              alt="slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWJkMjYwNzAt/MWJkMjYwNzAt-OTE2Mjc3NDUt-w1500._CB404905545_.jpg"
              alt="slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTU0NGZhYWQt/MTU0NGZhYWQt-YmIxNDMwOTEt-w1500._CB405104048_.jpg"
              alt="slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Marketing/012020_AMHD_Q1/US-EN_012020_AMUHD_Q1promo_OS_GW_Hero_D_3000x1200_2X_CV2B._CB426550134_.jpg"
              alt="slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/bts/gateway/BTS20_GW_Desktop_Hero_DigEdResources_2x_3000x600_v2._CB429427081_.jpg"
              alt="slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            title="Echo Dot with The Child stand"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w758._SY608_CB406624432_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Go wild with trendy prints"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="768464657"
            title="The new Halo wellness band"
            price={64.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w758._SY608_CB406527709_.jpg"
            rating={5}
          />
          <Product
            id="7774355464"
            title="Deals on apparel in Outlet"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_Coupons_DSC_758x608._SY608_CB429449198_.jpg"
            rating={5}
          />
          <Product
            id="12334566757"
            title="Shop medical supplies"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Health_x26_Personal_Care/XCM_Manual_1239353_1269289_US_us_health_personal_care_consumables_desktop_cat_card_hpc_1237578_2_3240978_758x608_2X_en_US._SY608_CB408425348_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="23434566755"
            title="Deals on overstock shoes"
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_SH_758x608_B07Z4CP5K1_920fe539._SY608_CB406458921_.jpg"
            rating={5}
          />
          <Product
            id="345546565767687"
            title="JavaScript and JQuery: Interactive Front-End Web Development 1st Edition"
            price={26.33}
            image="https://images-na.ssl-images-amazon.com/images/I/41y31M-zcgL._SX400_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="456466563435"
            title="JavaScript: The Good Parts: The Good Parts 1st Edition"
            price={16.89}
            image="https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3454565654"
            title="Gabrielle Union's Flawless Collection"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61QPh3J65iL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="45646656"
            title="Protect your home with Flo by Moen"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDQxZWMzNmQt/NDQxZWMzNmQt-NTg5MjhlYWUt-w758._SY608_CB407437045_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
