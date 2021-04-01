import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import HomePageCard from '../HomePageCard/HomePageCard';

const Home = (props) => {
  const {products, setProducts, orderInfo, setOrderInfo} = props;
  useEffect(() => {
    fetch('http://localhost:5555/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [setProducts]);
  console.log(products);
  const spinner = (
    <div className="w-100">
      <div className="d-flex justify-content-center align-items-center spinner-style">
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  );
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="container pt-3">
          <div className="row">

            {/* Spinner */}
            {
              products.length === 0 && spinner
            }
            {/* Spinner */}

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