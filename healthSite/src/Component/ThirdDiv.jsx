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
        <Container className="my-5 third-div-container">
            <Row className="align-items-center third-div-row">
                <Col md={9} className="position-relative third-div-col">
                    <div className="position-relative third-div-content-wrapper">
                        <img
                            src="ThirdDivOne.jpg"
                            alt="Healthy Salad"
                            className="salad-img third-div-salad"
                        />
                          <h2 className="about-title-mobile third-div-title-mobile">About Us</h2>
                        <div className="about-section third-div-about">
                            <h2 className="about-title third-div-title">About Us</h2>
                            <p className="about-description third-div-description">
                            Dr. Gulnaaz Shaikh's incredible 20-year journey in nutrition and dietetics is the foundation of her brand, standing as a beacon of health and wellness. Her career has been driven by a deep passion for helping individuals achieve their health goals naturally, using food as medicine.
                            </p>
                            <Button className="know-more-btn third-div-button">
                                Know More
                            </Button>
                        </div>
                        <div
                            className="doctor-container position-absolute third-div-doctor"
                            style={{ top: '55%', left: '110%', transform: 'translate(-50%, -50%)' }}
                        >
                            <img
                                src="GulnazSheikh.jpg"
                                alt="Dr. Gulnaaz Shaikh"
                                className="doctor-img third-div-doctor-img"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ThirdDiv;
