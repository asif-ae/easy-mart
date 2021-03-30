import React, { useContext } from 'react';
import { Button, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {loggedInUser.name}
    </Tooltip>
  );
  return (
    <div className="container-fluid p-0">
      <Navbar expand="lg" className="px-3 bg-purple">
        <Link to="/"><Navbar.Brand className="nav-link text-white">Hot Mart</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end px-3">
          <Nav className="text-right">
            <div className="px-1"><Link to="/" className="nav-link text-white">Home</Link></div>
            <div className="px-1"><Link to="/orders" className="nav-link text-white">Orders</Link></div>
            {
              loggedInUser.name ?
                <OverlayTrigger
                  placement="bottom-end"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <div className="m-auto">
                    <Link to="/">
                      <img
                        style={{height:"35px", borderRadius:"50%"}}
                        src={loggedInUser.photo}
                        alt={loggedInUser.name}
                      />
                    </Link>
                  </div>
                </OverlayTrigger>
              :
              <div className="px-1"><Link to="/login"><Button variant="success">Login</Button></Link></div>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;