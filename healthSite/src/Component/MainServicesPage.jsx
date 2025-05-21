import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css';
import ServicesDiv from "./ServicesDiv";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

AOS.init();

const MainServicesPage = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleScheduleClick = (e) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/vinaypatel898944'
    });
  };

  return (
    <>
   <div 
  className="contact-section position-relative vh-60 d-flex align-items-center justify-content-center my-3"
  style={{ 
    backgroundImage: `url("/freepik__the-style-is-candid-image-photography-with-natural__79823.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  }}
>
  {/* 🔴 Dark Overlay */}
  <div 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity for brightness
      zIndex: 1,
    }}
  />

  {/* White Text + Button on Top of Overlay */}
  <div 
    className="position-absolute top-50 start-50 translate-middle"
    data-aos="fade-up"
    data-aos-duration="1000"
    style={{ zIndex: 2 }} // Ensure text stays above the overlay
  >
    <div className="text-center text-white" data-aos-delay="300">
      <h1 style={{ fontSize: '4rem', fontWeight: '500', marginBottom: '8px' }}>
        Services
      </h1>
      <h6 style={{ fontSize: '1.4rem', fontWeight: '300', marginBottom: '10px' }}>
        Healthyz Provides
      </h6>
      <button 
        className="btn btn-light my-3 px-4 py-2 "
        style={{
          fontWeight: '600',
          fontSize: '0.95rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        onClick={handleScheduleClick}
      >
        Schedule Call
      </button>
    </div>
  </div>
</div>

      <ServicesDiv/>
      <Testimonials/>
      <Faq/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default MainServicesPage;