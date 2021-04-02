import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
  const {products, setProducts, setProduct} = props;
  useEffect(() => {
    fetch('https://mighty-lowlands-97984.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [setProducts, products]);

  const deleteProduct = (id) => {
    console.log(id);
    fetch(`https://mighty-lowlands-97984.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      console.log('Deleted successfully:', result)
    })
  }

  const loadProduct = (id) => {
    fetch(`https://mighty-lowlands-97984.herokuapp.com/product/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data);
    })
  }

  const spinner = (
    <div className="w-100">
      <div className="d-flex justify-content-center align-items-center spinner-style">
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  );

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

          {/* Spinner */}
            {
              products.length === 0 && spinner
            }
          {/* Spinner */}

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
                      <p>${price}</p>
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
                </div>
              );
            })
          }
        </div>
        <div className="d-flex justify-content-center text-center mt-5">
          <Alert variant="warning" className="w-75">
            <div>Product edit function is available now. You have to click the <b>"EDIT"</b> icon for edit a item.</div>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;