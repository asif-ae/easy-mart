import React, { useState } from 'react';
import { Route } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import AdminAside from '../AdminAside/AdminAside';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  return (
    <div className="row container-fluid m-0 p-0">
      <div className="col-3 p-0">
        <AdminAside></AdminAside>
      </div>
      <div className="col-9 p-0 m-0">
        <Route path="/admin/manageProduct">
          <ManageProduct
            products={products} setProducts={setProducts}
            setProduct={setProduct}
          ></ManageProduct>
        </Route>
        <Route path="/admin/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route path="/admin/editProduct">
          <EditProduct product={product}></EditProduct>
        </Route>
      </div>
    </div>
  );
};

export default Admin;