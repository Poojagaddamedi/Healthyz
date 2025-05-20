import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Faq.css';

const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    "How Are Customized Diet Plans Created?",
    "Are The Methods Safe For Everyone?",
    "What Conditions Can Dr. Gulnazz Help With?",
    "Can I Consult Online?",
    "How Long Does It Take To See Results?",
    "What If I Need Adjustments To My Plan?",
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="faq-container" style={{ maxWidth: '1100px', margin: '50px auto', padding: '0 20px' }}>

      <div className="faq-content-wrapper" >
         {/* Right Column - Contact Details */}
         <div className="contact-column">
         <div
  className="contact-card"
>
          <div className="faq-header">
        <h1 className="faq-main-title">FAQ</h1>
        <p className="faq-subtitle">Frequently Asked 
          Questions</p>
      </div>
          </div>
        </div>
        
        {/* Left Column - Questions */}
        <div className="faq-list-column" style={{ maxWidth: '600px', margin: 'auto' }}>
      <div className="faq-list">
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => toggleQuestion(index)}
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '8px',
              marginBottom: '10px',
              padding: '7px 10px',
              fontSize: '17px',
              cursor: 'pointer',
              fontWeight: 'bold',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>{index + 1}.</span>
              <span>{question}</span>
              <br/>
            </div>

            {/* Icon at the end bottom right corner */}
            <div style={{ textAlign: 'right', marginTop: '6px' }}>
              <FaChevronDown style={{ fontSize: '12px', color: '#555' }} />
            </div>

            {/* Optional expanded answer content */}
            {openIndex === index && (
              <div style={{ marginTop: '8px', color: '#444', fontWeight: 'normal' }}>
                This is a placeholder answer for: <em>{question}</em>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

       
      </div>
    </div>
  );
};

export default Faq;