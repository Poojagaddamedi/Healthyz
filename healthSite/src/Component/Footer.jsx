import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '40px 50px',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Left Section - Brand & Address */}
        <div style={{ flex: '1 1 280px' }}>
          <h3 style={{ color: '#014438', fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '12px' }}>
            Healthyz<sup>™</sup>
          </h3>
          <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '14px' }}>
            Partnering with you for lifelong health through clinical nutrition, specialized medical dietetics, and sustainable lifestyle changes.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: 0 }}>
            <a
              href="https://share.google/6T5tUSAhqB3oyyl14"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#2d3748', display: 'inline-flex', gap: '8px', alignItems: 'flex-start' }}
            >
              <FaMapMarkerAlt style={{ color: '#014438', marginTop: '4px', flexShrink: 0 }} />
              <span>
                <strong>Address:</strong> Haware Intelligentia Business Park, Opp. Mafco Market, Sector 19, Vashi, Navi Mumbai, Maharashtra 400705
              </span>
            </a>
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div style={{ flex: '1 1 180px', lineHeight: '2', fontWeight: '500' }}>
          <h4 style={{ color: '#014438', fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>
            Quick Links
          </h4>
          <div>
            <Link to="/" style={{ textDecoration: 'none', color: '#2d3748', transition: 'color 0.2s' }}>
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" style={{ textDecoration: 'none', color: '#2d3748', transition: 'color 0.2s' }}>
              About Us
            </Link>
          </div>
          <div>
            <Link to="/services" style={{ textDecoration: 'none', color: '#2d3748', transition: 'color 0.2s' }}>
              Services
            </Link>
          </div>
          <div>
            <Link to="/stories" style={{ textDecoration: 'none', color: '#2d3748', transition: 'color 0.2s' }}>
              Client Stories
            </Link>
          </div>
          <div>
            <Link to="/blog" style={{ textDecoration: 'none', color: '#2d3748', transition: 'color 0.2s' }}>
              Blog & Insights
            </Link>
          </div>
          <div>
            <Link to="/faqs" style={{ textDecoration: 'none', color: '#2d3748', transition: 'color 0.2s' }}>
              FAQs
            </Link>
          </div>
          <div>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#2d3748', transition: 'color 0.2s' }}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Section - Contact Info & Socials */}
        <div style={{ flex: '1 1 260px' }}>
          <h4 style={{ color: '#014438', fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>
            Get in Touch
          </h4>
          <p style={{ marginBottom: '10px' }}>
            <a
              href="mailto:healthyz045@gmail.com"
              style={{ textDecoration: 'none', color: '#2d3748', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaEnvelope style={{ color: '#014438' }} />
              <span>healthyz045@gmail.com</span>
            </a>
          </p>
          <p style={{ marginBottom: '10px' }}>
            <a
              href="tel:+917208422647"
              style={{ textDecoration: 'none', color: '#2d3748', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaPhoneAlt style={{ color: '#014438' }} />
              <span>+91 7208422647</span>
            </a>
          </p>
          <p style={{ marginBottom: '14px' }}>
            <a
              href="https://wa.me/917208422647"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#008f65', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaWhatsapp style={{ fontSize: '1.2rem', color: '#25D366' }} />
              <span>Chat on WhatsApp</span>
            </a>
          </p>

          <div style={{ marginTop: '16px' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#4a5568', marginBottom: '8px' }}>
              Follow Us
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f5f9',
                  color: '#3b5998',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
              >
                <FaFacebookF style={{ fontSize: '16px' }} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f5f9',
                  color: '#E1306C',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
              >
                <FaInstagram style={{ fontSize: '16px' }} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f5f9',
                  color: '#0e76a8',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
              >
                <FaLinkedinIn style={{ fontSize: '16px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div
        style={{
          borderTop: '1px solid #edf2f7',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 50px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#718096',
          flexWrap: 'wrap',
          gap: '12px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div>
          © {new Date().getFullYear()} Healthyz. All rights reserved. Dr. Gulnaaz Shaikh.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/privacy-policy" style={{ textDecoration: 'none', color: '#014438', fontWeight: '600' }}>
            Privacy Policy
          </Link>
          <Link to="/privacy-policy#cookie-policy" style={{ textDecoration: 'none', color: '#014438', fontWeight: '600' }}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
