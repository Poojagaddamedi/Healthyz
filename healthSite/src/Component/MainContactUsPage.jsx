import React, { useEffect, useState } from "react";
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


    </>
  );
};

export default MainContactUsPage;
