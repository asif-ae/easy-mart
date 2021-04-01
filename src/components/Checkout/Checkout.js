import React from 'react';

const Checkout = (props) => {
  const {orderInfo, setOrderInfo} = props;
  const {name, quantity, price} = props.orderInfo;
  const handleOrder = () => {
    const newOrder = {...orderInfo};
    newOrder.date = new Date();
    setOrderInfo(newOrder);

    // Send Orders
    fetch('http://localhost:5555/addOrders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }
  return (
    <div className="container p-3">
      <div className="py-3">
        <h3>Checkout</h3>
      </div>
      <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-7">
                <small className="m-0">Product Name</small>
              </div>
              <div className="col-md-3">
                <small className="m-0">Quantity</small>
              </div>
              <div className="col-md-2">
                <small className="m-0">Price</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body text-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-7">
                <p className="m-0">{name}</p>
              </div>
              <div className="col-md-3">
                <p className="m-0">{quantity}</p>
              </div>
              <div className="col-md-2">
                <p className="m-0">{price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent border-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-10">
                <p className="m-0"><b>Total</b></p>
              </div>
              <div className="col-md-2">
                <p className="m-0"><b>${price}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button onClick={handleOrder} className="btn btn-success">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;