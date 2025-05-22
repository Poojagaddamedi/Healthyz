import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BootstrapNavbar
      expand={false}
      expanded={expanded}
      className="bg-teal-900 px-4 py-3"
    >
      <Container fluid className="flex justify-between items-center">
        {/* Logo */}
        <BootstrapNavbar.Brand as={Link} to="/" className="text-xl font-bold text-black">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="d-block d-md-none"
            style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/logo.jpg"
            alt="Logo"
            className="d-none d-md-block"
            style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
          />
        </BootstrapNavbar.Brand>

        {/* Hamburger Icon */}
        <BootstrapNavbar.Toggle
          aria-controls="custom-navbar"
          onClick={() => setExpanded(!expanded)}
          className="border-0 ml-auto"
        />
      </Container>

      {/* Green Underline for Mobile 
      <div className="d-block d-md-none" style={{ borderBottom: '3px solid green', margin: '1px 1rem 0 1rem' }}></div>*/}

      {/* Collapsible Menu */}
      <BootstrapNavbar.Collapse
        id="custom-navbar"
        className="bg-white px-4 py-3 text-center"
      >
        <Nav
          className="d-flex align-items-center gap-6 flex-wrap"
          style={{ fontSize: '1rem', fontWeight: '500' }}
        >
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="text-black">Home</Nav.Link>
          <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)} className="text-black">Services</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)} className="text-black">About</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)} className="text-black">Contact</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;