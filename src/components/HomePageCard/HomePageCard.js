import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const HomePageCard = (props) => {
  const {_id, name, price, image, weight} = props.data;
  const {orderInfo, setOrderInfo} = props;
  console.log(orderInfo);
  const weightString = ` - ${weight}`;

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleOrder = () => {
    const newOrder = {...orderInfo};
    newOrder.id = _id;
    newOrder.productName = name;
    newOrder.price = price;
    newOrder.ownerName = loggedInUser.name;
    newOrder.email = loggedInUser.email;
    setOrderInfo(newOrder);
  }
  return (
    <div className="col-md-6 col-lg-3">
      <div className="item single-card bg-light text-primary">
        <img src={image} alt={name} className="card-image w-100"/>
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