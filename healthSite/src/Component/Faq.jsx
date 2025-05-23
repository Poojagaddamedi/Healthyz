import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    "How Are Customized Diet Plans Created?",
    "Are The Methods Safe For Everyone?",
    "What Conditions Can Dr. Gulnaaz Help With?",
    "Can I Consult Online?",
    "How Long Does It Take To See Results?",
    "What If I Need Adjustments To My Plan?",
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
    {/* Changed container to use CSS class */}
    <div className="faq-columns">
      {/* Left Column - FAQ Header (no changes here) */}
      <div className="faq-header">
        <h1 className="faq-main-title">FAQ</h1>
        <p className="faq-subtitle">
          Frequently Asked<br />Questions
        </p>
      </div>

        {/* Right Column - Questions */}
        <div style={{ flex: 2 }}>
        <div className="questions-column">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '-2px' }}>
            {questions.map((question, index) => (
              <div
                key={index}
                className="faq-list-item"
                onClick={() => toggleQuestion(index)}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <span className="question-number" style={{ 
                      color: '#666',
                      fontWeight: 'bold',
                    }}>
                      {index + 1}.
                    </span>
                    <span className="question-text" style={{ 
                      fontWeight: '600',
                      color: '#333',
                      fontSize: '16px',
                    }}>
                      {question}
                    </span>
                  </div>
                  <FaChevronDown 
                    className="faq-icon"
                    style={{ 
                      color: '#666',
                      fontSize: '14px',
                      transition: 'transform 0.2s',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </div>

                {openIndex === index && (
                  <div className="faq-answer" style={{ 
                    marginTop: '12px',
                    color: 'black',
                    fontSize: '15px',
                    lineHeight: 1.5,
                    paddingLeft: '24px',
                  }}>
                    This is a placeholder answer for: <em>{question}</em>
                  </div>
                )}
                <hr className="border border-dark" />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;
