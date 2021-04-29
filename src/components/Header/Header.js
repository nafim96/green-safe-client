import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="warning" variant="light">
      <Nav className="mr-auto">
        <Nav.Link > <Link to="/manageProduct">Manage Product</Link></Nav.Link>
        <Nav.Link ><Link to="/addProduct">Add Product</Link></Nav.Link>
        <Nav.Link ><Link to="/editProduct">Edit Product</Link></Nav.Link>
      </Nav>
      <Navbar.Brand >
          <Link to="/admin">Admin Panel</Link>
        </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
