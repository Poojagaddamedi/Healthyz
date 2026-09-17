import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaWhatsapp, FaLock, FaUserCheck } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <>
      <div style={{
        background: 'linear-gradient(135deg, #013529 0%, #004d40 100%)',
        color: 'white',
        padding: '4rem 1.5rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.8rem' }}>
          Privacy Policy & WhatsApp Data Disclosure
        </h1>
        <p style={{ fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto', opacity: 0.9 }}>
          How Healthyz and Dr. Gulnaaz Shaikh collect, handle, and safeguard your personal information and health consultation requests.
        </p>
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '3.5rem 1.5rem',
        color: '#2d3748',
        lineHeight: '1.8',
        fontSize: '1.02rem'
      }}>
        <div style={{
          backgroundColor: '#f0fdf4',
          border: '1.5px solid #86efac',
          borderRadius: '16px',
          padding: '1.5rem 2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start'
        }}>
          <FaWhatsapp style={{ color: '#25D366', fontSize: '2rem', flexShrink: 0, marginTop: '4px' }} />
          <div>
            <h3 style={{ color: '#014438', fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.4rem' }}>
              Important Notice on Appointment Requests via WhatsApp
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#1f2937' }}>
              When you fill out the appointment booking form on Healthyz, the information you provide (Name, Phone Number, Email, and Health Concern) is formatted into a prefilled message that opens directly in WhatsApp to our clinic (+91 7208422647). <strong>Opening the WhatsApp chat does not automatically transmit your details or confirm an appointment until you actively review the text and tap "Send" in WhatsApp.</strong>
            </p>
          </div>
        </div>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#014438', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaShieldAlt style={{ color: '#00a878' }} /> 1. Information We Collect
          </h2>
          <p>
            When you interact with our website or submit an appointment request, we collect details including:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li><strong>Personal Identification:</strong> Full Name, Email Address, and Contact Telephone Number.</li>
            <li><strong>Health & Wellness Information:</strong> Health concerns, nutritional objectives, and specific dietary requests provided voluntarily by you.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#014438', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaLock style={{ color: '#00a878' }} /> 2. How We Use Your Information
          </h2>
          <p>
            The details provided are used solely for:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Scheduling and confirming your one-on-one nutrition consultation.</li>
            <li>Preparing your personalized clinical diet chart and health guidelines.</li>
            <li>Providing relevant follow-ups, appointment reminders, and ongoing clinical support.</li>
            <li>We do <strong>never sell, lease, or rent</strong> your personal or health data to any third-party marketing companies.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#014438', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaUserCheck style={{ color: '#00a878' }} /> 3. Confidentiality & Medical Privacy
          </h2>
          <p>
            As a registered clinical dietitian, Dr. Gulnaaz Shaikh treats all client medical histories, lab reports, and diet consultations with strict professional confidentiality in accordance with clinical healthcare ethics.
          </p>
        </section>

        <section id="cookie-policy" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#014438', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem' }}>
            4. Cookie Policy
          </h2>
          <p>
            Healthyz uses standard, minimal cookies and session storage strictly necessary to deliver a fast, responsive, and secure browsing experience. We do not track invasive cross-site advertising identifiers.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#014438', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem' }}>
            5. Contacting Us
          </h2>
          <p>
            For any questions or requests regarding your data, please contact:
            <br />
            <strong>Healthyz Clinic & Dietetics</strong>
            <br />
            Email: <a href="mailto:healthyz045@gmail.com" style={{ color: '#014438' }}>healthyz045@gmail.com</a>
            <br />
            Phone: <a href="tel:+917208422647" style={{ color: '#014438' }}>+91 7208422647</a>
            <br />
            Address: Haware Intelligentia Business Park, Opp. Mafco Market, Sector 19, Vashi, Navi Mumbai, Maharashtra 400705
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
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
            Back to Appointment Booking
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
