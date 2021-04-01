import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
  // , watch, errors {for later use}
  const { register, handleSubmit } = useForm();

  // State for storing image data
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    const productData = {
      name: data.productName,
      weight: data.weight,
      price: data.addPrice,
      image: imageURL
    }
    const serverURL = 'http://localhost:5555/addProduct';
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => console.log('server side respose:', res));
  }

  // On Change Image Upload Handler
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'b373b317b63fb4939f325af937793ecc');
    imageData.append('image', event.target.files[0]);

    // Axios Fetching
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url);
      console.log(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const AlertDismissibleExample = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert variant="warning" className="mt-5" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Note:</Alert.Heading>
          <ol>
            <li>This form wasn't validated perfectly. You should enter the reasonable value into it.</li>
            <li>If you want to see the changes, you have to go the <b>"Home"</b> or the <b>"Manage Product"</b> page.</li>
          </ol>
        </Alert>
      );
    }
    return <Button varient="warning" className="d-none" onClick={() => setShow(true)}>Show Alert</Button>;
  }

  return (
    <div>
      <div className="px-5 py-3">
        <h4 className="px-3">Add Product</h4>
      </div>
      <div className="p-5 adminLightBG">
        <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
          <div className="p-5">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input name="productName" id="productName" placeholder="Enter Product Name" className="form-control" ref={register} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="weight" className="form-label">Weight</label>
                <input name="weight" id="weight" placeholder="Enter Weight Value" className="form-control" ref={register} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="addPrice" className="form-label">Add Price</label>
                <input name="addPrice" id="addPrice" placeholder="Enter Price Value" className="form-control" ref={register} />
              </div>
              <div className="col-md-6 mb-3">
                <div className="pb-2">Add Photo</div>
                <div className="custom-file">
                  <label htmlFor="customFile" className="custom-file-label">Add A Photo</label>
                  <input name="addPhoto" id="customFile" type="file" className="custom-file-input" onChange={handleImageUpload} />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <input className="btn btn-success px-5" type="submit" value="Save" />
            </div>
          </div>
        </form>
        <div>
          <AlertDismissibleExample />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;