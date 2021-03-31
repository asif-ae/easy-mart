import React, { useEffect } from 'react';

const Home = (props) => {
  const {products, setProducts} = props;
  useEffect(() => {
    fetch('http://localhost:5555/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [setProducts]);
  return (
    <div>
      
    </div>
  );
};

export default Home;