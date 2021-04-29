import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const MainHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const headerStyle = {
    backgroundColor: "#343a40",
  };
  return (
    <div style={headerStyle}>
      <Navbar className="container" variant="light" bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">GREEN SAFE</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto p-3">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/order">Orders</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/admin">Admin</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/deal">Deal</Link>
            </Nav.Link>
            <Nav.Link>
              {loggedInUser.email ? (
                <Link to="/profile">
                  {loggedInUser.name || loggedInUser.displayName}
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainHeader;
