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
      <div className="flex-title">
        <h1 className="mt-4">Why Healthyz</h1>
        <h2 className="mb-4 fw-normal" id="secondName">
          Know The Healthyz Difference With
        </h2>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 flex-card-container">
        {/* Card 1 */}
        <Card
          data-aos="fade-right"
          className="text-left border-0 flex-card"
          style={{
            backgroundColor: 'rgba(74, 198, 214, 1)',
            borderRadius: '30px'
          }}
        >
          <Card.Body>
            <Card.Title className="fw-bold">Customized Diet Plans</Card.Title>
            <hr />
            <Card.Text>
              Designed for your body, lifestyle, and goals, we offer personalized guidance for sustainable results. Achieve a healthier, happier you with expert customization.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card
          data-aos="fade-up"
          className="text-left border-0 flex-card"
          style={{
            backgroundColor: 'rgba(244, 143, 177, 1)',
            borderRadius: '30px'
          }}
        >
          <Card.Body>
            <Card.Title className="fw-bold">Natural, Side-Effect-Free Methods</Card.Title>
            <hr />
            <Card.Text>
              Discover the strength of natural, tested techniques that keep your health at top priority with no side effects. Our focus on safe, sustainable solutions nourish you for the long-term health.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card
          data-aos="fade-left"
          className="text-left border-0 flex-card"
          style={{
            backgroundColor: 'rgba(255, 138, 101, 1)',
            borderRadius: '30px'
          }}
        >
          <Card.Body>
            <Card.Title className="fw-bold">100% Satisfaction Guarantee</Card.Title>
            <hr />
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
