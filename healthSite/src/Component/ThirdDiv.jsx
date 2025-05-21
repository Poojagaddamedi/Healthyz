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
        <Container className="my-5">
            <Row className="align-items-center">
                {/* Combined Image Section */}
                <Col md={9} className="position-relative">
                    <div className="position-relative">
                        <img
                            src="ThirdDivOne.jpg"
                            alt="Healthy Salad"
                            className="salad-img"
                        />
                        <div className="about-section" style={{ maxWidth: '65%' }}>
                            <h2 className="about-title">About Us</h2>
                            <p className="about-description">
                                Dr. Gulnaaz Shaikh's incredible 20-year journey in nutrition and
                                dietetics is the foundation of her brand, standing as a beacon of
                                health and wellness. Her career has been driven by a deep passion
                                for helping individuals achieve their health goals naturally, using
                                food as medicine.
                            </p>
                            <Button className="know-more-btn">
                                Know More
                            </Button>
                        </div>
                        <div className="doctor-container position-absolute" style={{ top: '55%', left: '110%', transform: 'translate(-50%, -50%)' }}>
                            <img
                                src="ThirdDivDocter.jpg"
                                alt="Dr. Gulnaaz Shaikh"
                                className="doctor-img"
                            />
                           
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ThirdDiv;