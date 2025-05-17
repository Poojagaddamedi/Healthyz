import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ThirdDiv.css';

const ThirdDiv = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);  
  return (
    <Container className="my-5 position-relative" style={{ height: '80vh' }}>
      {/* Images Section */}
      <Row className="align-items-start">
        {/* Left Side: Salad Image */}
        <Col data-aos="fade-right" md={6}>
          <img
            src="ThirdDivOne.jpg"
            alt="Healthy Salad"
            className="img-fluid rounded salad-img"
          />
        </Col>
      </Row>

      {/* Text Section (Below Salad Image) */}
      <Row className="mt-3">
        <Col data-aos="fade-right" md={6}>
          <div className="about-section">
            <h2 className="text-uppercase">About Us</h2>
            <p className="mt-3">
              Dr. Gulnaaz Shaikh’s incredible 20-year journey in nutrition and dietetics is the foundation, standing as a beacon of health and wellness. Her career has been driven by a deep passion for helping individuals achieve their health goals naturally, using food as medicine.
            </p>
            <Button variant="success" className="mt-1 know-more-btn">
              Know More
            </Button>
          </div>
        </Col>
      </Row>

      {/* Doctor Image (Bottom Right, Overlapping) */}
      <div className="doctor-overlay">
        <div 
          data-aos="fade-left" className="position-relative doctor-container">
          <img
            src="ThirdDivDocter.jpg"
            alt="Dr. Gulnaaz Shaikh"
            className="img-fluid rounded doctor-img"
          />
          <div className="doctor-label bg-success text-white p-2 rounded">
            Dr. Gulnaaz Shaikh (Founder)
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ThirdDiv;





       {/* Right Side: Doctor Image
        <Col md={6} className="d-flex justify-content-end">
          <div className="position-relative doctor-container">
            <img
              src="ThirdDivDocter.jpg"
              alt="Dr. Gulnaaz Shaikh"
              className="img-fluid rounded doctor-img"
            />
            <div className="doctor-label bg-success text-white p-2 rounded">
              Dr. Gulnaaz Shaikh (Founder)
            </div>
          </div>
        </Col> */}