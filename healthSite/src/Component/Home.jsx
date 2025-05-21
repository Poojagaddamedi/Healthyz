import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import ServicesDiv from "./ServicesDiv";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { Link } from 'react-router-dom'; 

function HealthyzHome() {
  // Animation states
  const [step, setStep] = useState(0); // 0: initial, 1: first image up, 2: first image right, 3: text/button in

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
  const logoStyle = {
    position: "absolute",
    top: 20,
    left: 140,
    height: 58,
    zIndex: 10,
  };

  // Card/container style
  const cardStyle = {
    position: "relative",
    width: 1330,
    height: 630, // Increased height
    margin: "30px auto 0 auto",
    background: "#fff",
    borderRadius: 32,
    boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
    display: "flex",
    overflow: "hidden",
    zIndex: 2,
  };

  // Green image (left) style
  const greenStyle = {
    width: step > 1 ? "40%" : 0,
    minWidth: 0,
    height: "100%",
    background: "#014438",
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
    zIndex: 1,
  };

  // Food image (right) style
  const foodStyle = {
    width: step > 1 ? "60%" : "100%",
    height: "100%",
    transform: step === 0 ? "translateY(100%)" : "translateY(0)",
    backgroundImage: `url('/foodImage.avif')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.85)",
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    borderTopLeftRadius: step > 1 ? 32 : 32,
    borderBottomLeftRadius: step > 1 ? 32 : 32,
    transition: "transform 1s cubic-bezier(0.4,0,0.2,1), width 0.8s cubic-bezier(0.4,0,0.2,1), border-radius 0.8s cubic-bezier(0.4,0,0.2,1)",
    zIndex: 2,
    marginLeft: step > 1 ? "1%" : 0, // Adding space between images
  };

  // Text style
  const textStyle = {
    position: "absolute",
    left: "5%", // Adjusted to align text to the left
    top: "50%",
    transform: "translateY(-50%)",
    width: "90%",
    color: "#fff",
    //fontFamily: "'Bookman Old Style' ",
    background: "rgba(0,0,0,0.0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align text to the left
    justifyContent: "center",
    opacity: step === 3 ? 1 : 0,
    transition: "opacity 0.8s",
    zIndex: 3,
    pointerEvents: step === 3 ? "auto" : "none",
  };

  // Button style
  const buttonStyle = {
    width: 170,
    height: 56,
    fontSize: 22,
    textAlign: "left",
    //fontWeight: "bold",
    marginTop: 30,
    background: "#fff",
    color: "#004d40",
    border: "none",
    paddingLeft: 30,
    //paddingRight: 50,
    paddingTop: -10,
    borderRadius: 12,
    //boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
    zIndex: 4,
    opacity: step === 3 ? 1 : 0,
    transition: "opacity 0.8s",
    pointerEvents: step === 3 ? "auto" : "none",
    alignSelf: "flex-start", // Align button to the left
  };

  return (
    <>
      {/* LOGO */}
      <img src="/logo192.png" alt="Healthyz Logo" style={logoStyle} />
      {/* CARD SECTION */}
      <div style={cardStyle}>
        <div style={greenStyle}></div>
        <div style={foodStyle}></div>
        <div style={textStyle}>
          <h1 style={{ fontSize: 110, fontWeight: 450, margin: 0 }}>Welcome to Healthyz</h1>
          <h3 style={{ fontSize: 34, margin: "20px 0 0 0" }}>– Your Partner in Health</h3>
          <button style={buttonStyle}>
            <Link to="/services" style={{ textDecoration: 'none', color: '#004d40', fontWeight: 350, fontSize: 20,  width: '50%', height: '70%' }}>
              See Services
            </Link>
          </button>
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



