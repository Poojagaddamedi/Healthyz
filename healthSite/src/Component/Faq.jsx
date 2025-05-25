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

  const answers = [
    "Customized diet plans are created by getting data from individual clients like 24-hour dietary recall, lifestyle, working pattern, food preferences, food allergies & medical conditions, availability, affordability, and also considering their culture & community background to achieve their health goals.",
    "Yes, it is 100% safe. There are no side effects or any organ damage because it involves only natural functional foods & simple homemade foods without any medicines, supplements, or starvation.",
    "We can help you with customized diet plans & dietary guidelines for all disease conditions. We also provide proper diet counseling, physical activity guidance, motivation, meal tracking, and regular follow-ups.",
    "Yes, you can consult her online with prior appointments.",
    "The time it takes to see results varies from person to person depending on their health condition, goals, and how consistently they follow the plan. Most clients begin seeing changes within a few weeks.",
    "Yes, we provide regular follow-ups to make necessary adjustments to your diet plan based on your progress, preferences, and lifestyle changes.",
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-columns">
        <div className="faq-header">
          <h1 className="faq-main-title">FAQ</h1>
          <p className="faq-subtitle">
            Frequently Asked<br />Questions
          </p>
        </div>

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
                      {answers[index]}
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
