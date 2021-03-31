import React from 'react';
import { Route, Router, Switch } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import AdminAside from '../AdminAside/AdminAside';
import './Admin.css';
// import Lorem from './Lorem';

const Admin = () => {
  return (
    <div className="row container-fluid m-0 p-0">
      <div className="col-3 p-0">
        <AdminAside></AdminAside>
      </div>
      <div className="col-9 p-0 m-0">
        <Route exact path="/admin/manageProduct">
          <></>
        </Route>
        <Route exact path="/admin/addProduct">
          <AddProduct></AddProduct>
        </Route>
      </div>
    </div>
  );
};

export default Admin;