import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Stories', path: '/stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <BootstrapNavbar
      expand="lg"
      expanded={expanded}
      className="healthyz-navbar"
    >
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <BootstrapNavbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center">
          <img
            src="/logo.jpg"
            alt="Healthyz Logo"
            className="d-block d-md-none"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/logo.jpg"
            alt="Healthyz Logo"
            className="d-none d-md-block"
            style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
          />
        </BootstrapNavbar.Brand>

        {/* Hamburger Icon for Mobile & Tablet only */}
        <BootstrapNavbar.Toggle
          aria-controls="healthyz-nav-menu"
          onClick={() => setExpanded(!expanded)}
          className="healthyz-toggler ml-auto"
        />

        {/* Navigation Menu */}
        <BootstrapNavbar.Collapse
          id="healthyz-nav-menu"
          className="healthyz-nav-collapse justify-content-end"
        >
          <Nav className="d-flex align-items-lg-center gap-1 gap-lg-2">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                onClick={() => setExpanded(false)}
                className={`healthyz-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Nav.Link>
            ))}

            {/* Quick Action CTA */}
            <Link
              to="/contact#appointment-form"
              onClick={() => setExpanded(false)}
              className="nav-book-btn"
            >
              Book Appointment
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;