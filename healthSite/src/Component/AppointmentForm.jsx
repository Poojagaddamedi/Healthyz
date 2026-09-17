import React, { useState } from 'react';
import { FaWhatsapp, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    healthConcern: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation helper
  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    const phoneClean = formData.phone.replace(/[^0-9+]/g, '');
    if (!phoneClean || phoneClean.length < 8) {
      errs.phone = 'Please enter a valid contact phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.healthConcern.trim()) {
      errs.healthConcern = 'Please briefly describe your health concern or problem.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Prefilled message per specification:
    // Appointment Request
    // Name: [Full name]
    // Phone: [Contact number]
    // Email: [Email address]
    // Health concern: [Problem entered]
    const message = `Appointment Request\nName: ${formData.fullName.trim()}\nPhone: ${formData.phone.trim()}\nEmail: ${formData.email.trim()}\nHealth concern: ${formData.healthConcern.trim()}`;

    const businessPhone = '917208422647';
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  return (
    <div className="appointment-card" id="appointment-form">
      <div className="appointment-header">
        <h3>Book an Appointment</h3>
        <p>Connect directly with Dr. Gulnaaz Shaikh for personalized diet & clinical nutrition consultation</p>
      </div>

      {submitted && (
        <div className="appointment-success-alert">
          <div className="d-flex align-items-center gap-2 mb-2">
            <FaCheckCircle style={{ color: '#38b2ac', fontSize: '1.2rem' }} />
            <strong>WhatsApp Chat Opened!</strong>
          </div>
          <p className="mb-0">
            Your appointment details have been prefilled in WhatsApp. <strong>Please tap "Send" in WhatsApp</strong> to submit your request to Dr. Gulnaaz Shaikh.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="appointment-form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`form-control-custom ${errors.fullName ? 'input-error' : ''}`}
            />
            {errors.fullName && <span className="field-error">{errors.fullName}</span>}
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="phone">
              Contact Number <span className="required-star">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className={`form-control-custom ${errors.phone ? 'input-error' : ''}`}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>

          {/* Email Address */}
          <div className="form-group form-group-full">
            <label htmlFor="email">
              Email Address <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@example.com"
              className={`form-control-custom ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          {/* Health Concern */}
          <div className="form-group form-group-full">
            <label htmlFor="healthConcern">
              Health Concern or Problem <span className="required-star">*</span>
            </label>
            <textarea
              id="healthConcern"
              name="healthConcern"
              rows={4}
              value={formData.healthConcern}
              onChange={handleChange}
              placeholder="e.g. Weight management, PCOS diet, diabetes care, gastrointestinal health..."
              className={`form-control-custom ${errors.healthConcern ? 'input-error' : ''}`}
            />
            {errors.healthConcern && <span className="field-error">{errors.healthConcern}</span>}
          </div>
        </div>

        {/* Privacy Policy notice beside/below form */}
        <div className="privacy-notice-box">
          <FaShieldAlt className="privacy-notice-icon" />
          <p className="privacy-notice-text">
            <strong>Privacy Policy Notice:</strong> Submitting this form validates your details and opens our verified business WhatsApp (+91 7208422647) with your prefilled appointment request. Opening the chat does not automatically send or confirm an appointment until you tap <strong>Send</strong> in WhatsApp. Your confidential health details are strictly protected. <Link to="/privacy-policy">Read full Privacy Policy</Link>.
          </p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="appointment-submit-btn">
          <FaWhatsapp style={{ fontSize: '1.4rem' }} />
          Book an Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
