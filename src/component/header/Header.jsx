import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand><Link to={'/'}><img className="header-logo" src="https://i.ibb.co/qC0VGGM/logo.png"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/login'} className='text-decoration-none nav-route'>Log in</Link></Nav.Link>
            <Nav.Link><Link to={'/signup'} className='text-decoration-none signin-btn'>Sign up</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
