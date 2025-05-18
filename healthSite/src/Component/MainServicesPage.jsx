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
          backgroundImage: 'url(https://mooka.ie/img/sliderimages/slider-services-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Blue overlay */}
        <div 
          className="position-absolute top-50 start-50 translate-middle"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="text-center text-white" data-aos-delay="300">
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '8px' }}>
              SERVICES 
            </h1>
            <h6 style={{ fontWeight: '500', marginBottom: '10px' }}>
              Healthyz Provides
            </h6>
            <button 
              className="btn btn-light my-3 px-4 py-2 rounded-pill"
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