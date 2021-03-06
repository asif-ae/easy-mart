import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePageCard = (props) => {
  const {_id, name, price, image, weight} = props.data;
  const {orderInfo, setOrderInfo} = props;
  console.log(orderInfo);
  const weightString = ` - ${weight}`;

  const handleOrder = () => {
    const newOrder = {...orderInfo};
    newOrder.id = _id;
    newOrder.productName = name;
    newOrder.price = price;
    setOrderInfo(newOrder);
  }
  return (
    <div className="col-md-6 col-lg-3 mb-3">
      <div className="item single-card bg-light text-primary">
        <div className="text-center d-flex align-items-center">
          <img src={image} alt={name} className="card-image w-100"/>
        </div>
        <div className="p-2">
          <p>
            <b>
              {name}
              {
                weight ? weightString : ''
              }
            </b>
          </p>
          <div className="d-flex justify-content-between">
            <h3>${price}</h3>
            <Link to={"/checkout"}>
              <Button onClick={handleOrder} className="btn-card">BUY NOW</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;