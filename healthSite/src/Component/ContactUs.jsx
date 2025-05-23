import React, { useEffect ,useContext} from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css';
import MainContext from '../CreateContext/createContext';

AOS.init();

const Contact = () => {
  const { openCalendly } = useContext(MainContext);
  // useEffect(() => {
  //   // Load Calendly script dynamically
  //   const script = document.createElement('script');
  //   script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //   script.async = true;
  //   document.head.appendChild(script);

  //   AOS.refresh();

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  // const handleScheduleClick = (e) => {
  //   e.preventDefault();
  //   window.Calendly.initPopupWidget({
  //     url: 'https://calendly.com/vinaypatel898944'
  //   });
  // };

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
            Contact us
          </h4>
          <h1 style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '8px' }}>
            Let’s Get In Touch
          </h1>
          <p style={{ fontSize: '0.95rem', marginBottom: '25px',color:"white" }}>
            Start your healthy journey today.
          </p>

          
          
          {/* Schedule Call Button */}
          <button 
            className="btn btn-light px-4 py-2 "
            style={{
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            onClick={openCalendly}
          >
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;