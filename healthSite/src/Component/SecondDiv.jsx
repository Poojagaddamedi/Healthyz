import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from 'react-bootstrap';
import './FlexCard.css';

const FlexCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);  
  return (
    <>
      <div className="ms-5">
        <h1 className="mt-4">Why Healthyz</h1>
        <p className="mb-4 fw-bold">Know The Healthyz Difference With</p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4 p-6 bg-light">
        {/* Card 1 */}
        <Card
        data-aos="fade-right" 
          style={{ width: '22rem', backgroundColor: '#E0F7FA' }}
          className="shadow rounded text-center border-0"
        >
          <Card.Body className="p-4">
            <Card.Title className="fw-bold">Customized Diet Plans</Card.Title>
            <hr className="w-50 mx-auto my-3" />
            <Card.Text>
              Designed for your body, lifestyle, and goals, we offer personalized guidance for sustainable results. Achieve a healthier, happier you with expert customization.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card
        data-aos="fade-up" 
          style={{ width: '22rem', backgroundColor: '#FFEBEE' }}
          className="shadow rounded text-center border-0"
        >
          <Card.Body className="p-4">
            <Card.Title className="fw-bold">Natural, Side-Effect-Free Methods</Card.Title>
            <hr className="w-50 mx-auto my-3" />
            <Card.Text>
              Discover the strength of natural, tested techniques that keep your health at top priority with no side effects. Our focus on safe, sustainable solutions nourish you for the long-term health.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card
        data-aos="fade-left" 
          style={{ width: '22rem', backgroundColor: '#FFE0B2' }}
          className="shadow rounded text-center border-0"
        >
          <Card.Body className="p-4">
            <Card.Title className="fw-bold">100% Satisfaction Guarantee</Card.Title>
            <hr className="w-50 mx-auto my-3" />
            <Card.Text>
              Your satisfaction is our first priority. We take utmost care and support so that your journey is both rewarding and fulfilling— attain your health goals.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FlexCard;