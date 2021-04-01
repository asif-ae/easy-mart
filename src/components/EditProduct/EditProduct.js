import React from 'react';
import { useForm } from 'react-hook-form';

const EditProduct = (props) => {
  const {product} = props;

  // , watch, errors {for later use}
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:5555/update/'+data.itemID, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log('updated:', data));
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

              return (
                <div className="p-3" key={_id}>
                  <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-5">
                        <input name="productName" id="productName" placeholder="Enter Product Name" className="form-control" defaultValue={name} ref={register} />
                      </div>
                      <div className="col-md-3">
                        <input name="weight" id="weight" placeholder="Enter Weight Value" className="form-control" defaultValue={weight} ref={register} />
                      </div>
                      <div className="col-md-3">
                        <input name="addPrice" id="addPrice" placeholder="Enter Price Value" className="form-control" defaultValue={price} ref={register} />
                      </div>
                      <div className="col-md-1 text-center m-0 p-0">
                        <input name="itemID" id="itemID" className="d-none" value={_id} ref={register} />
                        <input className="btn btn-success" type="submit" value="Update" />
                      </div>
                    </div>
                  </form>
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