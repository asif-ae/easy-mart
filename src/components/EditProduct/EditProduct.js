import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
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

  const AlertDismissibleExample = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert variant="warning" className="mt-5" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Note:</Alert.Heading>
          <p>If you want to see the changes, you have to go the <b>"Home"</b> or the <b>"Manage Product"</b> page.</p>
        </Alert>
      );
    }
    return <Button varient="warning" className="d-none" onClick={() => setShow(true)}>Show Alert</Button>;
  }
  
  return (
    <div>
      <div className="px-3 py-3">
        <h4 className="px-3">Edit Product</h4>
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
                        <input name="itemID" id="itemID" className="d-none" defaultValue={_id} ref={register} />
                        <input className="btn btn-success" type="submit" defaultValue="Update" />
                      </div>
                    </div>
                  </form>
                  <div>
                    <AlertDismissibleExample />
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