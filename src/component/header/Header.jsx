import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";
import "./header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <Navbar sticky="top" expand="lg" bg="white" className="header-conatiner">
      <Container>
        <Navbar.Brand><Link to={'/'}><img className="header-logo" src="https://i.ibb.co/qC0VGGM/logo.png"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>{
                user?'':<Link className="text-decoration-none nav-route" to={"/login"}>
                Log in
              </Link>
              }</Nav.Link>
            <Nav.Link>{user?
                <>
                  <Link to={'/additem'} className='text-decoration-none nav-route me-3'>Add Item</Link>
                  <Link to={'/manageitem'} className='text-decoration-none nav-route me-3'>Manage Item</Link>
                <span onClick={()=>signOut(auth)} className='signin-btn'>Sign out</span>
                </>
                : 
                <Link className="text-decoration-none signin-btn" to={"/signup"}>Sign in</Link>}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
