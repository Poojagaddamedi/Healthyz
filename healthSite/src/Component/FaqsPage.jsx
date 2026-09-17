import React from 'react';
import Faq from './Faq';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const FaqsPage = () => {
  return (
    <>
      <div style={{
        background: 'linear-gradient(135deg, #013529 0%, #004d40 100%)',
        color: 'white',
        padding: '4.5rem 1.5rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '0.8rem' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', opacity: 0.9 }}>
          Everything you need to know about our clinical nutrition consultations, customized meal plans, and consultation process.
        </p>
      </div>

      <div style={{ padding: '2.5rem 0' }}>
        <Faq />
      </div>

      <div style={{
        backgroundColor: '#f8fafc',
        padding: '3.5rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0'
      }}>
        <h3 style={{ color: '#014438', fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.8rem' }}>
          Still Have Questions?
        </h3>
        <p style={{ color: '#4a5568', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Connect directly with our team on WhatsApp or book a one-on-one consultation with Dr. Gulnaaz Shaikh.
        </p>
        <Link
          to="/contact#appointment-form"
          style={{
            backgroundColor: '#014438',
            color: '#ffffff',
            padding: '0.85rem 2.2rem',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Book an Appointment
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default FaqsPage;
