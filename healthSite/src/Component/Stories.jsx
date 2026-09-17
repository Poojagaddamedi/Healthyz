import React from 'react';
import Testimonials from './Testimonials';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <>
      <div style={{
        background: 'linear-gradient(135deg, #013529 0%, #004d40 100%)',
        color: 'white',
        padding: '4.5rem 1.5rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '0.8rem' }}>
          Real Patient Stories & Health Transformations
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
          Discover how patients achieved sustainable weight goals, balanced PCOS, managed diabetes, and reclaimed vitality under the clinical guidance of Dr. Gulnaaz Shaikh.
        </p>
      </div>

      <div style={{ padding: '2rem 0' }}>
        <Testimonials />
      </div>

      <div style={{
        backgroundColor: '#f0fdf4',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid #bbf7d0',
        borderBottom: '1px solid #bbf7d0'
      }}>
        <h2 style={{ color: '#014438', fontSize: '2.2rem', fontWeight: '700', marginBottom: '1rem' }}>
          Ready to Start Your Transformation Story?
        </h2>
        <p style={{ color: '#4a5568', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Book a direct one-on-one consultation with Dr. Gulnaaz Shaikh and receive an individualized nutrition plan tailored to your health profile.
        </p>
        <Link
          to="/contact#appointment-form"
          style={{
            backgroundColor: '#014438',
            color: '#ffffff',
            padding: '0.9rem 2.5rem',
            borderRadius: '50px',
            fontWeight: '700',
            fontSize: '1.05rem',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(1, 68, 56, 0.3)'
          }}
        >
          Book Your Appointment
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Stories;
