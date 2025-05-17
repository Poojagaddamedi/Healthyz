import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false); // State to toggle menu

  return (
    <BootstrapNavbar
      expand={false} // Disable default expand logic
      expanded={expanded}
      className="bg-teal-900 text-black px-4 py-3 shadow-2xl shadow-black"
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}
    >
      <Container fluid className="flex justify-between items-center">
        {/* Logo */}
        <BootstrapNavbar.Brand href="#" className="text-3xl font-bold text-black">
          HealthyZ
        </BootstrapNavbar.Brand>

        {/* Hamburger icon */}
        <BootstrapNavbar.Toggle
          aria-controls="custom-navbar"
          onClick={() => setExpanded(!expanded)}
          className="border-0"
        />
      </Container>

      {/* Custom collapsible nav */}
      {expanded }
    </BootstrapNavbar>
  );
};

export default Navbar;
