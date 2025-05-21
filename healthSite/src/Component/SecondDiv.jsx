import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from 'react-bootstrap';
import './FlexCard.css';

const FlexCard = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);  
  return (
    <>
      <div style={{ marginLeft: '8%' }}>
        <h1 className="mt-4 text-start  ">Why Healthyz</h1>
        <h2 className="mb-4 fw-normal text-start" style={{ fontSize: '3rem' }}>Know The Healthyz Difference With</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 p-6 bg-light marginLeft:'8%' ">
        {/* Card 1 */}
        <Card
        data-aos="fade-right" 
          style={{ width: '22rem', backgroundColor: 'rgba(74, 198, 214, 1)', borderRadius: '30px' }} // Brighter color
          className="text-left border-0"
        >
          <Card.Body className="p-5">
            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#fff', paddingTop: '3px', textAlign: 'left' }}>Customized  Diet  Plans</Card.Title>
            <hr className="w-40 mx-auto my-3 p-3" style={{ borderColor: '#fff' }} />
            <Card.Text style={{ fontSize: '1rem', color: '#fff', marginTop: '-12px', textAlign: 'left' }}>
              Designed for your body, lifestyle, and goals, we offer personalized guidance for sustainable results. Achieve a healthier, happier you with expert customization.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card
        data-aos="fade-up" 
          style={{ width: '22rem', backgroundColor: 'rgba(244, 143, 177, 1)', borderRadius: '30px' }} // Brighter color
          className="text-left border-0"
        >
          <Card.Body className="p-4">
            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#fff', textAlign: 'left' }}>Natural, Side-Effect-Free Methods</Card.Title>
            <hr className="w-10 mx-auto my-3 p-2" style={{ borderColor: '#fff' }} />
            <Card.Text style={{ fontSize: '1rem', color: '#fff', textAlign: 'left' }}>
              Discover the strength of natural, tested techniques that keep your health at top priority with no side effects. Our focus on safe, sustainable solutions nourish you for the long-term health.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card
        data-aos="fade-left" 
          style={{ width: '22rem', backgroundColor: 'rgba(255, 138, 101, 1)', borderRadius: '30px' }} // Brighter color
          className="text-left border-0"
        >
          <Card.Body className="p-4">
            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#fff', textAlign: 'left' }}>100% Satisfaction Guarantee</Card.Title>
            <hr className="w-10 mx-auto my-3 p-2" style={{ borderColor: '#fff' }} />
            <Card.Text style={{ fontSize: '1rem', color: '#fff', textAlign: 'left' }}>
              Your satisfaction is our first priority. We take utmost care and support so that your journey is both rewarding and fulfilling— attain your health goals.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FlexCard;