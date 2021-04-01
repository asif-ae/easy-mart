import { faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AdminAside = () => {
  let params = useParams("/admin/:dynamic");

  const manageProductClass = params.dynamic === "manageProduct" ? "asideActive" : "";
  const addProductClass = params.dynamic === "addProduct" ? "asideActive" : "";
  const editProductClass = params.dynamic === "editProduct" ? "asideActive" : "";

  const asideListFunction = (typeName, icon, mainName) => {
    return (
      <Link to={`/admin/${typeName}`}>
          <div id={typeName} className="row m-0 p-0">
            <div className="col-2 d-flex justify-content-end align-self-center">
              <div className="py-3 pr-0">
                <FontAwesomeIcon icon={icon} />
              </div>
            </div>
            <div className="col-10 d-flex justify-content-start align-self-center">
              <div className="py-3 pl-0">
                {mainName}
              </div>
            </div>
          </div>
        </Link>
    );
  }

  return (
    <div className="aside bg-tomato">
      <div className={`productList ${manageProductClass}`}>
        {asideListFunction("manageProduct", faThLarge, "Manage Product")}
      </div>
      <div className={`productList ${addProductClass}`}>
        {asideListFunction("addProduct", faPlus, "Add Product")}
      </div>
      <div className={`productList ${editProductClass}`}>
        {asideListFunction("editProduct", faPen, "Edit Product")}
      </div>
    </div>
  );
};

export default AdminAside;