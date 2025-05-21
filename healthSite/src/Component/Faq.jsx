import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

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
    <div className="faq-container" style={{ 
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '40px 20px',
    }}>
      <div style={{ 
        display: 'flex',
        gap: '80px',
        justifyContent: 'space-between',
      }}>
        {/* Left Column - FAQ Header */}
        <div style={{ flex: 1 }}>
          <h1 style={{ 
            fontSize: '42px',
            color: '#2d2d2d',
            marginBottom: '15px',
          }}>
            FAQ
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#555',
            lineHeight: 1.4,
          }}>
            Frequently Asked<br />Questions
          </p>
        </div>

        {/* Right Column - Questions */}
        <div style={{ flex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {questions.map((question, index) => (
              <div
                key={index}
                onClick={() => toggleQuestion(index)}
                style={{
                  // backgroundColor: '#f7f7f7',
                  // borderRadius: '8px',
                  // padding: '12px 16px',
                  cursor: 'pointer',
                  position: 'relative',
                  // border: '1px solid #e0e0e0',
                }}
              >
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ 
                      color: '#666',
                      fontWeight: 'bold',
                    }}>{index + 1}.</span>
                    <span style={{ 
                      fontWeight: '600',
                      color: '#333',
                      fontSize: '16px',
                    }}>{question}</span>
                  </div>
                  <FaChevronDown 
                    style={{ 
                      color: '#666',
                      fontSize: '14px',
                      transition: 'transform 0.2s',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </div>

                {openIndex === index && (
                  <div style={{ 
                    marginTop: '12px',
                    color: 'black',
                    fontSize: '15px',
                    lineHeight: 1.5,
                    paddingLeft: '24px',
                  }}>
                    This is a placeholder answer for: <em>{question}</em>
            
                  </div>
                )}
                         <hr className="border border-dark"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;