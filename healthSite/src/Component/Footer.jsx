import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #ccc' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '30px 50px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Section */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ color: '#004d40', fontWeight: 'bold', marginBottom: '8px' }}>
            Healthyz<sup>™</sup>
          </h3>
          <p style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '1.5', marginBottom: 0 }}>
            <a
              href="https://share.google/6T5tUSAhqB3oyyl14"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              📍 Address: Haware Intelligentia Business Park, <br />
              Opp Mafco Market, Vashi
            </a>
          </p>
        </div>

        {/* Middle Section */}
        <div style={{ flex: '1 1 150px', lineHeight: '1.8', fontWeight: 'bold' }}>
          <Link to="/about" style={{ textDecoration: 'none', color: '#004d40' }}>
            <p>About us</p>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none', color: '#004d40' }}>
            <p>Services</p>
          </Link>
          <p>Blog</p>
          <p>Courses</p>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#004d40' }}>
            <p> Contact</p>
          </Link>
        </div>

        {/* Right Section */}
        <div style={{ flex: '1 1 250px', fontWeight: 'bold' }}>
          <p>Email: gulnaazakram@gmail.com</p>
          <p>
            <a href="tel:+917208422647" style={{ textDecoration: 'none', color: 'inherit' }}>
              M: +91 7208422647
            </a>
          </p>
          <p>Book a consultation</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <FaFacebookF style={{ fontSize: '18px', color: '#3b5998', cursor: 'pointer' }} />
            <FaInstagram style={{ fontSize: '18px', color: '#E1306C', cursor: 'pointer' }} />
            <FaLinkedinIn style={{ fontSize: '18px', color: '#0e76a8', cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: '1px solid gray',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '12px 50px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#004d40',
        }}
      >
        <div style={{ marginRight: '25px', cursor: 'pointer' }}>Privacy Policy</div>
        <div style={{ cursor: 'pointer' }}>Cookie Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
