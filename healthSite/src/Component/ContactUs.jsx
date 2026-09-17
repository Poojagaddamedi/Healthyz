import React, { useEffect ,useContext} from 'react'; 
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css';
import MainContext from '../CreateContext/createContext';
import { Link } from 'react-router-dom'; 

AOS.init();

const Contact = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact#appointment-form');
  };

  return (
    <div 
      className="contact-section position-relative vh-80 d-flex align-items-center justify-content-center"
      style={{ 
        backgroundImage: 'url(contactus.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        padding: '60px 0'
      }}
    >
      <div 
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          width: '90%',
          maxWidth: '600px',
          backgroundColor: 'rgba(0, 51, 34, 0.85)',
          borderRadius: '20px',
          backdropFilter: 'blur(1px)',
          padding: '40px',
          zIndex: 2
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="text-center text-white mb-4" data-aos-delay="300">
          <h4 style={{ fontWeight: '400', marginBottom: '16px' }}>
            Contact Us
          </h4>
          <h1 style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '8px' }}>
            Let’s Get In Touch
          </h1>
          <p style={{ fontSize: '0.95rem', marginBottom: '25px', color: "white" }}>
            Start your personalized health journey today.
          </p>

          {/* Book Appointment Button */}
          <button 
            className="btn btn-light px-4 py-2"
            style={{
              color: "#013529",
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            onClick={handleClick}
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;