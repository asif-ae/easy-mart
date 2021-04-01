import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:5555/orders?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data => setOrders(data));
  }, [loggedInUser.email]);
  
  const spinner = (
    <div className="w-100">
      <div className="d-flex justify-content-center align-items-center spinner-style">
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  );

  // Calculate price
  let totalPrice = 0;
  return (
    <div className="container p-3">
      <div className="py-3">
        <h3>Your Orders</h3>
      </div>
      <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-6">
                <h5 className="m-0">Owner Name: {loggedInUser.name}</h5>
              </div>
              <div className="col-md-6 text-right">
                <h5 className="m-0">Email Address: {loggedInUser.email}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-header text-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-4">
                <p className="m-0">Product Name</p>
              </div>
              <div className="col-md-4">
                <p className="m-0">Checkout Date {`&`} Times</p>
              </div>
              <div className="col-md-2">
                <p className="m-0">Quantity</p>
              </div>
              <div className="col-md-2">
                <p className="m-0">Price</p>
              </div>
            </div>
          </div>
        </div>

        {/* Spinner */}
        {
          orders.length === 0 && spinner
        }
        {/* Spinner */}
        
        {
          orders.map(order => {
            const {_id, productName, date, quantity, price} = order;
            totalPrice += Number(price);

            return (
              <div key={_id}>
                <div className="card-body text-success">
                  <div className="round-10">
                    <div className="row">
                      <div className="col-md-4">
                        <p className="m-0">{productName}</p>
                      </div>
                      <div className="col-md-4">
                        <p className="m-0">
                          Date: {(new Date(date)).toDateString()}<br/>
                          Time: {(new Date(date)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
                        </p>
                      </div>
                      <div className="col-md-2">
                        <p className="m-0">{quantity}</p>
                      </div>
                      <div className="col-md-2">
                        <p className="m-0">{price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
        <div className="card-footer bg-transparent border-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-10">
                <p className="m-0"><b>Total</b></p>
              </div>
              <div className="col-md-2">
                <p className="m-0"><b>${totalPrice}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;