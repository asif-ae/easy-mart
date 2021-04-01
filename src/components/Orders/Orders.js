import React from 'react';

const Orders = () => {

  return (
    <div className="container p-3">
      <div className="py-3">
        <h3>Your Orders</h3>
      </div>
      <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-4">
                <small className="m-0">Product Name</small>
              </div>
              <div className="col-md-3">
                <small className="m-0">Checkout Date</small>
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
              <div className="col-md-4">
                <p className="m-0">Product Name</p>
              </div>
              <div className="col-md-3">
                <p className="m-0">Checkout Date</p>
              </div>
              <div className="col-md-3">
                <p className="m-0">Quantity</p>
              </div>
              <div className="col-md-2">
                <p className="m-0">Price</p>
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
                <p className="m-0"><b>$500</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;