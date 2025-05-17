import React from 'react';
import { Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  './ContactUs.css';

AOS.init();

const Contact = () => {
  return (
    <div 
      className="contact-section position-relative vh-60 d-flex align-items-center justify-content-center"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Blue overlay */}
      <div 
  className="position-absolute top-50 start-50 translate-middle"
  style={{
    width: '600px',
    backgroundColor: 'rgba(0, 51, 34, 0.85)', // Dark greenish tone
    borderRadius: '20px',
    backdropFilter: 'blur(4px)',
    padding: '40px',
    zIndex: 2
  }}
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <div className="text-center text-white" data-aos-delay="300">
    <h4 style={{ fontWeight: '500', marginBottom: '10px' }}>
      Contact us
    </h4>
    <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px' }}>
      Let’s Get In Touch
    </h1>
    <p style={{ fontSize: '0.95rem', marginBottom: '25px' }}>
      Start your healthy journey today.
    </p>
    <button 
      className="btn btn-light px-4 py-2 rounded-pill"
      style={{
        fontWeight: '600',
        fontSize: '0.95rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    >
      Schedule Call
    </button>
  </div>
</div>

    </div>
  );
};

export default Contact;