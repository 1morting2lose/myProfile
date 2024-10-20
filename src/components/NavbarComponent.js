import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={NavLink} exact to="/" className="navbar-brand">
          My Profile
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-center w-100">
            <Nav.Link as={NavLink} exact to="/" className="nav-link mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link mx-3">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="nav-link mx-3">
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link mx-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
