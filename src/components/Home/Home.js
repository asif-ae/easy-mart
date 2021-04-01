import React, { useEffect } from 'react';
import HomePageCard from '../HomePageCard/HomePageCard';

const Home = (props) => {
  const {products, setProducts, orderInfo, setOrderInfo} = props;
  useEffect(() => {
    fetch('http://localhost:5555/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [setProducts]);
  console.log(products);
  return (
    <div className="background">
      <div className="background-opacity d-flex align-items-center">
        <div className="container pt-3">
          <div className="row">
            {
              products.map(data => {
                return (
                  <HomePageCard
                    data={data} key={data._id}
                    orderInfo={orderInfo} setOrderInfo={setOrderInfo}
                  ></HomePageCard>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;