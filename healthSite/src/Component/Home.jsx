import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom'; 
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import ServicesDiv from "./ServicesDiv";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function HealthyzHome() {
  // Animation states
  const [step, setStep] = useState(0); // 0: initial, 1: first image up, 2: first image right, 3: text/button in
  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    AOS.init({ duration: 1700 });
    // Step 1: after 1s, animate first image up
    const timer1 = setTimeout(() => setStep(1), 1000);
    // Step 2: after another 1s, move first image right and show green image
    const timer2 = setTimeout(() => setStep(2), 2000);
    // Step 3: after another 1s, show text/button
    const timer3 = setTimeout(() => setStep(3), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Logo style


  // Card/container style
  // const logoStyle = {
  //   position: "absolute",
  //   top: isMobile ? "10px" : "20px",
  //   left: isMobile ? "20px" : "140px",
  //   height: isMobile ? "40px" : "58px",
  //   zIndex: 10,
  // };

  // Modified card/container style
  const cardStyle = {
    position: "relative",
    width: isMobile ? "95%" : 1330,
    height: isMobile ? "500px" : 630,
    margin: isMobile ? "12px " : "30px auto 0 auto",
    background: "#fff",
    borderRadius: isMobile ? 8 : 32,
    boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
    flexDirection: isMobile ? "column-reverse" : "row",
    display: "flex",
    overflow: "hidden",
    zIndex: 2,
  };

  // Modified green image (left) style
 const greenStyle = {
  width: isMobile ? "100%" : step > 1 ? "40%" : 0,
  height: isMobile ? "50%" : "100%",
  background: "#014438",
  borderRadius: 32,
  transition: isMobile ? "none" : "all 0.8s cubic-bezier(0.4,0,0.2,1)",
  zIndex: 1,
};

const foodStyle = {
  width: isMobile ? "100%" : step > 1 ? "60%" : "100%",
  height: isMobile ? "50%" : "100%",
  transform: step === 0 ? "translateY(100%)" : "translateY(0)",
  backgroundImage: `url('/HomePage.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.85)",
  borderRadius: 32,
  transition: isMobile ? "none" : "all 1s cubic-bezier(0.4,0,0.2,1)",
  zIndex: 2,
  marginLeft: isMobile ? 0 : step > 1 ? "1%" : 0,
  position: isMobile ? "relative" : "relative",
  bottom: "auto",
};

  // Modified text style
  const textStyle = {
    position: "absolute",
    left: isMobile ? "4%" : "5%",
    marginTop: isMobile ? "0%" : "0%",
    top: "50%",
    transform: "translateY(-50%)",
    width: isMobile ? "90%" : "90%",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    opacity: step === 3 ? 1 : 0,
    transition: "opacity 0.8s",
    zIndex: 3,
    pointerEvents: step === 3 ? "auto" : "none",
  };

  // Modified button style
  const buttonStyle = {
    width: isMobile ? "100%" : 170,
    height: isMobile ? 48 : 56,
    fontSize: isMobile ? 16 : 22,
    marginTop: isMobile ? 20 : 30,
    padding: "0 20px",
    borderRadius: 12,
    zIndex: 4,
    opacity: step === 3 ? 1 : 0,
    transition: "opacity 0.8s",
    pointerEvents: step === 3 ? "auto" : "none",
    alignSelf: "flex-start",
    backgroundColor: "white",
    color: "white",
    border: "none",
    cursor: "pointer",
  };
  
  
  return (
    <>
      {/* LOGO */}
      {/* CARD SECTION */}
      <div className={`card-container`}>
  <div className={`green-div ${step <= 1 ? 'initial' : ''}`}></div>
  <div className={`food-div ${step === 0 ? 'initial' : ''}`}></div>

  <div
    className="text-overlay"
    style={{
      opacity: step === 3 ? 1 : 0,
      pointerEvents: step === 3 ? 'auto' : 'none',
    }}
  >
    <h1
      data-aos={isMobile ? undefined : "fade"}
      data-aos-offset="20"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
    >
      Welcome to Healthyz
    </h1>

    <h3>– Your Partner in Health</h3>

    <div
      className="button-container"
      data-aos={isMobile ? undefined : "wipe-left"}
      data-aos-delay="300"
      data-aos-offset="10"
      data-aos-duration="600"
    >
      <button className="button-main">
        <Link to="/services" className="button-link">
          See Services
        </Link>
      </button>

      {isMobile && (
        <button className="button-main">
          <Link to="/contact" className="button-link">
            Schedule a Call
          </Link>
        </button>
      )}
    </div>
  </div>
</div>

      {/* REST OF THE PAGE */}
      <SecondDiv />
      <ThirdDiv/>
      <ServicesDiv/>
      <Testimonials/>
      <Faq/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default HealthyzHome;