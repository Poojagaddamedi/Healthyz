import React, { useEffect, useState } from "react";
import { FaMousePointer, FaCalendarDay, FaFileSignature, FaVideo, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import './MainContactUsPage.css';

const MainContactUsPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(error.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <h1 className="hero-title">Contact Us</h1>
      </div>

      {/* About Healthyz Section */}
      <section className="about-healthyz" style={{ 
  padding: '5rem 0',
  background: 'linear-gradient(135deg, #e3fdf5 0%, #ffe6fa 100%)',
  position: 'relative'
}}>
  <div className="container" style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    position: 'relative',
    zIndex: 1
  }}>
    <h2 style={{
      color: '#2a4b6e',
      fontSize: '2.5rem',
      marginBottom: '2rem',
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
    }}>About Healthyz</h2>
    
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius: '20px',
      padding: '2.5rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
      marginBottom: '2rem'
    }}>
      <p style={{
        color: '#4a5568',
        fontSize: '1.1rem',
        lineHeight: '1.8',
        marginBottom: '2rem',
        fontWeight: '500'
      }}>
        🌱 Healthyz is your guide to a better lifestyle through expert dietary planning and health consultation.<br />
        We provide personalized diet plans based on your medical condition and help you understand:
      </p>
      
      <ul style={{
        listStyleType: 'none',
        paddingLeft: '0',
        columns: '2',
        gap: '2rem',
        color: '#4a5568'
      }}>
        <li style={{ 
          marginBottom: '1.5rem', 
          paddingLeft: '2rem',
          position: 'relative',
          fontSize: '1rem',
          lineHeight: '1.6'
        }}>
          <span style={{
            position: 'absolute',
            left: '0',
            color: '#48bb78',
            fontSize: '1.4rem'
          }}>•</span>
          What to eat based on your health profile
        </li>
        <li style={{ 
          marginBottom: '1.5rem', 
          paddingLeft: '2rem',
          position: 'relative',
          fontSize: '1rem',
          lineHeight: '1.6'
        }}>
          <span style={{
            position: 'absolute',
            left: '0',
            color: '#4299e1',
            fontSize: '1.4rem'
          }}>•</span>
          When to eat – optimal timing
        </li>
        <li style={{ 
          marginBottom: '1.5rem', 
          paddingLeft: '2rem',
          position: 'relative',
          fontSize: '1rem',
          lineHeight: '1.6'
        }}>
          <span style={{
            position: 'absolute',
            left: '0',
            color: '#f6ad55',
            fontSize: '1.4rem'
          }}>•</span>
          Portion control & nutrient balance
        </li>
        <li style={{ 
          marginBottom: '1.5rem', 
          paddingLeft: '2rem',
          position: 'relative',
          fontSize: '1rem',
          lineHeight: '1.6'
        }}>
          <span style={{
            position: 'absolute',
            left: '0',
            color: '#f56565',
            fontSize: '1.4rem'
          }}>•</span>
          Personalized consultation sessions
        </li>
      </ul>
    </div>

    <div style={{
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <p style={{
        display: 'inline-block',
        backgroundColor: '#48bb78',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '1.1rem',
        boxShadow: '0 4px 6px rgba(72, 187, 120, 0.2)',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        margin: '0 auto'
      }}>
        🩺 Start Your Health Journey
      </p>
    </div>
  </div>
</section>
<section className="booking-instructions" style={{ 
  padding: '4rem 0',
  background: 'linear-gradient(135deg, #f3f9ff 0%, #f8f5ff 100%)'
}}>
  <div className="container" style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem'
  }}>
    <h2 style={{
      color: '#2a4b6e',
      fontSize: '2.3rem',
      marginBottom: '2rem',
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    }}>
      <FaInfoCircle style={{ color: '#4299e1' }} />
      How to Book Your Consultation
    </h2>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    }}>
      {/* Step 1 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '2rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease',
        ':hover': { transform: 'translateY(-5px)' }
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#4299e1',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FaMousePointer style={{ color: 'white', fontSize: '1.2rem' }} />
          </div>
          <h3 style={{ margin: 0, color: '#2a4b6e', fontSize: '1.3rem' }}>Step 1: Select Service</h3>
        </div>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
          Choose between <strong>Diet Consultation</strong> or <strong>Medical Nutrition Therapy</strong> based on your needs
        </p>
      </div>

      {/* Step 2 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '2rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease',
        ':hover': { transform: 'translateY(-5px)' }
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#48bb78',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FaCalendarDay style={{ color: 'white', fontSize: '1.2rem' }} />
          </div>
          <h3 style={{ margin: 0, color: '#2a4b6e', fontSize: '1.3rem' }}>Step 2: Pick Time Slot</h3>
        </div>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
          Select your preferred date and time from available slots (15/30/60 minute options)
        </p>
      </div>

      {/* Step 3 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '2rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease',
        ':hover': { transform: 'translateY(-5px)' }
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#f6ad55',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FaFileSignature style={{ color: 'white', fontSize: '1.2rem' }} />
          </div>
          <h3 style={{ margin: 0, color: '#2a4b6e', fontSize: '1.3rem' }}>Step 3: Provide Details</h3>
        </div>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
          Fill in your medical history and current concerns for personalized consultation
        </p>
      </div>

      {/* Step 4 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '2rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease',
        ':hover': { transform: 'translateY(-5px)' }
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#f56565',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FaVideo style={{ color: 'white', fontSize: '1.2rem' }} />
          </div>
          <h3 style={{ margin: 0, color: '#2a4b6e', fontSize: '1.3rem' }}>Step 4: Join Session</h3>
        </div>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
          Receive confirmation email with Zoom link. Test your audio/video beforehand
        </p>
      </div>
    </div>


    <section className="calendly-section" style={{ 
  padding: '5rem 0',
  background: 'linear-gradient(45deg, #f8fafc 0%, #f0f4ff 100%)'
}}>
  <div className="container" style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem'
  }}>
    <h2 style={{
      color: '#2a4b6e',
      fontSize: '2.5rem',
      marginBottom: '2.5rem',
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
    }}>Book Consultation</h2>
    
    <div style={{
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: '3px solid #e2e8f0',
      backgroundColor: 'white',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* <div style={{
        position: 'absolute',
        top: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#4299e1',
        color: 'white',
        padding: '8px 20px',
        borderRadius: '30px',
        fontSize: '0.9rem',
        fontWeight: '600',
        boxShadow: '0 4px 6px rgba(66, 153, 225, 0.3)'
      }}>
        ⏱️ 30-Minute Sessions Available
      </div> */}
      <iframe
        src="https://calendly.com/vinaypatel898944"
        style={{ 
          minWidth: '320px',
          height: '700px',
          width: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Calendly Booking"
      ></iframe>
    </div>
  </div>
</section>


    <div style={{
      backgroundColor: '#f8fafc',
      borderRadius: '15px',
      padding: '2rem',
      textAlign: 'center',
      marginTop: '2rem',
      border: '2px solid #e2e8f0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
        <FaPhone style={{ color: '#4299e1' }} />
        <h3 style={{ margin: 0, color: '#2a4b6e' }}>Need Help Booking?</h3>
      </div>
      <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
        Call our support team at <strong>+91 12345 67890</strong> or<br />
        Email <strong>support@healthyz.com</strong>
      </p>
    </div>
  </div>
</section>


    </>
  );
};

export default MainContactUsPage;




















