import React from "react";
import cover from '../assets/cover.jpg';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Navlink, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function Header(props) {
  return (
   
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>Logo</Navbar.Brand>
          <NavbarToggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Product">Product</Nav.Link>
              <Nav.Link href="View cart">View cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
<img src ={cover} alt ="" width ="100%"></img>

</div>

      </div>
      
  );
}
