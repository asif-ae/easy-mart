import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
  const {products, setProducts, setProduct} = props;
  useEffect(() => {
    fetch('http://localhost:5555/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [setProducts, products]);

  const deleteProduct = (id) => {
    console.log(id);
    fetch(`http://localhost:5555/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      console.log('Deleted successfully:', result)
    })
  }

  const loadProduct = (id) => {
    fetch(`http://localhost:5555/product/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data);
    })
  }

  const AlertDismissibleExample = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert variant="warning" className="mt-5" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Note:</Alert.Heading>
          <p>Product edit function is available now. You have to click the <b>"EDIT"</b> icon for edit a item.</p>
        </Alert>
      );
    }
    return <Button varient="warning" className="d-none" onClick={() => setShow(true)}>Show Alert</Button>;
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
            products.map(product => {
              const {name, weight, price, _id} = product;
              
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
                      <Link to="/admin/editProduct">
                        <button className="btn btn-success mr-1" onClick={() => loadProduct(_id)}><FontAwesomeIcon icon={faPen} /></button>
                      </Link>
                      <button className="btn btn-danger" onClick={() => deleteProduct(_id)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>
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

export default ManageProduct;