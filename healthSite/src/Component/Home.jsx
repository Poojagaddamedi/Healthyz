import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import ServicesDiv from "./ServicesDiv";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Home.css";

function HealthyzHome() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1700 });
    const timer1 = setTimeout(() => setStep(1), 1000);
    const timer2 = setTimeout(() => setStep(2), 2000);
    const timer3 = setTimeout(() => setStep(3), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <div className="mobile-underline d-block d-md-none"></div>

      {/* MOBILE VIEW */}
      <div className="d-block d-md-none mobile-card">
        <div className="mobile-food">
          <p className="mobile-title">Welcome to Healthyz</p>
        </div>
        <div className="mobile-green">
          <h6 className="mobile-subtitle">- Your Partner in Health</h6>
          <button className="mobile-button">
            <Link to="/services" className="mobile-link">See Services</Link>
          </button>
          <button className="mobile-button">
            <Link to="/contact" className="mobile-link">Schedule Call</Link>
          </button>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="d-none d-md-block desktop-card">
        <div className={`food-section ${step >= 1 ? "slide-up" : ""} ${step >= 2 ? "slide-right" : ""}`} />
        <div className={`green-section ${step >= 2 ? "expand" : ""}`} />
        <div className={`content-text ${step >= 3 ? "show-text" : ""}`}>
          <h1 className="main-title">Welcome to Healthyz</h1>
          <h3 className="sub-title">– Your Partner in Health</h3>
          <button className="nav-button">
            <Link to="/services" className="link">See Services</Link>
          </button>
        </div>
      </div>

      <SecondDiv />
      <ThirdDiv />
      <ServicesDiv />
      <Testimonials />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}

export default HealthyzHome;
