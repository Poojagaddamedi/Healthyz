import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from 'react-bootstrap';
import './Flexcard.css';

const FlexCard = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);  
  return (
    <>
      <div className="flex-title" style={{ marginLeft: '8%' }}>
  <h1 className="mt-4 text-start">Why Healthyz?</h1>
  <h2 className="mb-4 fw-normal text-start" id="secondName" style={{ fontSize: '3rem' }}>
    Know The Healthyz Difference With
  </h2>
</div>

<div className="d-flex flex-wrap justify-content-center gap-3 p-6 bg-light flex-card-container">
        {/* Card 1 */}
        <Card
        data-aos="fade-right"
        className="text-left border-0 flex-card"
        style={{
          width: '22rem',
          backgroundColor: '#028090',
          borderRadius: '30px'
        }}
        >
          <Card.Body className="p-5">
            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#fff', paddingTop: '3px', textAlign: 'left' }}>Customized Diet Plans</Card.Title>
            <hr className="w-40 mx-auto my-3 p-3" style={{ borderColor: '#fff' }} />
            <Card.Text style={{ fontSize: '1rem', color: '#fff', marginTop: '-12px', textAlign: 'left' }}>
              Designed for your body, lifestyle, and goals, we offer personalized guidance for sustainable results. Achieve a healthier, happier you with expert customization.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card
      data-aos="fade-up"
      className="text-left border-0 flex-card"
      style={{
        width: '22rem',
        backgroundColor: '#D95388',
        borderRadius: '30px'
      }}
        >
          <Card.Body className="p-4">
            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#fff', textAlign: 'left' }}>Natural, Side-Effect-Free Methods</Card.Title>
            <hr className="w-10 mx-auto my-3 p-2" style={{ borderColor: '#fff' }} />
            <Card.Text style={{ fontSize: '1rem', color: '#fff', textAlign: 'left' }}>
              Discover the strength of natural, tested techniques that keep your health at top priority with no side effects. Our focus on safe, sustainable solutions nourishes you for long-term health.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card
      data-aos="fade-left"
      className="text-left border-0 flex-card"
      style={{
        width: '22rem',
        backgroundColor: '#E65100',
        borderRadius: '30px'
      }}
        >
          <Card.Body className="p-4">
            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#fff', textAlign: 'left' }}>Dedicated Patient Care & Support</Card.Title>
            <hr className="w-10 mx-auto my-3 p-2" style={{ borderColor: '#fff' }} />
            <Card.Text style={{ fontSize: '1rem', color: '#fff', textAlign: 'left' }}>
              Your wellness journey is our highest priority. We provide continuous support, empathetic guidance, and science-backed plans to help you achieve fulfilling, lasting health goals.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FlexCard;