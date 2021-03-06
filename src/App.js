import './App.css';
import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import Deals from './components/Deals/Deals';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [products, setProducts] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    id: '',
    productName: '',
    ownerName: '',
    email: '',
    quantity: 1,
    date: '',
    price: ''
  });
  console.log(products);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          {/* Local Route(s) */}
          <Route exact path="/">
            <Home
              products={products} setProducts={setProducts}
              orderInfo={orderInfo} setOrderInfo={setOrderInfo}
              ></Home>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* Local Route(s) */}

          {/* Private Route(s) */}
          <PrivateRoute path="/checkout">
            <Checkout
              products={products}
              orderInfo={orderInfo}
              setOrderInfo={setOrderInfo}
              ></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin/:dynamic">
            <Admin></Admin>
          </PrivateRoute>
          {/* Private Route(s) */}

          {/* Not Found Route(s) */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          {/* Not Found Route(s) */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
