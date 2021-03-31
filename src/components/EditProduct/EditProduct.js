import React from 'react';

const EditProduct = (props) => {
  const {product} = props;
  console.log(product);

  const updateProduct = (id) => {
    console.log(id)
  }
  return (
    <div>
      <div className="px-3 py-3">
        <h4 className="px-3">Manage Product</h4>
      </div>
      <div className="p-2 adminLightBG">
        <div className="p-3 bg-white round-10">

          {/* Table Header */}
          <div className="p-3 bg-light round-10">
            <div className="row">
              <div className="col-md-5">
                <h5 className="m-0">Product Name</h5>
              </div>
              <div className="col-md-3">
                <h5 className="m-0">Weight</h5>
              </div>
              <div className="col-md-3">
                <h5 className="m-0">Price</h5>
              </div>
              <div className="col-md-1">
                <h5 className="m-0">Action</h5>
              </div>
            </div>
          </div>

          {/* Table Body */}
          {
            product.map(choosedProduct => {
              const {name, weight, price, _id} = choosedProduct;
              console.log(name, weight, price, _id);

              return (
                <div className="p-3" key={_id}>
                  <div className="row">
                    <div className="col-md-5">
                      <p>{name}</p>
                    </div>
                    <div className="col-md-3">
                      <p>{weight}</p>
                    </div>
                    <div className="col-md-3">
                      <p>{price}</p>
                    </div>
                    <div className="col-md-1 text-center d-flex m-0 p-0">
                      <button className="btn btn-success mr-1" onClick={() => updateProduct(_id)}>Update</button>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default EditProduct;