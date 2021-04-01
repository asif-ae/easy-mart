import { faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AdminAside = () => {
  let params = useParams("/admin/:dynamic");

  const manageProductClass = params.dynamic === "manageProduct" ? "asideActive" : "";
  const addProductClass = params.dynamic === "addProduct" ? "asideActive" : "";
  const editProductClass = params.dynamic === "editProduct" ? "asideActive" : "";
  return (
    <div className="aside bg-tomato">
      <div className={`productList ${manageProductClass}`}>
        <Link to='/admin/manageProduct'>
          <div id="manageProduct" className="row m-0 p-0">
            <div className="col-2 d-flex justify-content-end align-self-center">
              <div className="py-3 pr-0 pl-3">
                <FontAwesomeIcon icon={faThLarge} />
              </div>
            </div>
            <div className="col-10 d-flex justify-content-start align-self-center">
              <div className="py-3 pl-0 pr-3">
                Manage Product
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={`productList ${addProductClass}`}>
        <Link to='/admin/addProduct'>
          <div id="addProduct" className="row m-0 p-0">
            <div className="col-2 d-flex justify-content-end align-self-center">
              <div className="py-3 pr-0">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <div className="col-10 d-flex justify-content-start align-self-center">
              <div className="py-3 pl-0">
                Add Product
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={`productList ${editProductClass}`}>
        <Link to='/admin/editProduct'>
          <div id="editProduct" className="row m-0 p-0">
            <div className="col-2 d-flex justify-content-end align-self-center">
              <div className="py-3 pr-0">
                <FontAwesomeIcon icon={faPen} />
              </div>
            </div>
            <div className="col-10 d-flex justify-content-start align-self-center">
              <div className="py-3 pl-0">
                Edit Product
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminAside;