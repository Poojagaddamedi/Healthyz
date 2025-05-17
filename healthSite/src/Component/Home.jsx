import React, { useEffect } from "react";
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

function HealthyzHome() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);  
  return (
    <>
    {/* FIRST SECTION DIV */}
      <div className="flex flex-col h-screen p-4 bg-gray-100 mt-3">
      <div className="position-relative d-flex gap-3 p-3 bg-light justify-content-center flex-wrap">

{/* ✅ Centered Text Over Both Images */}
<div
  className="position-absolute top-50 start-50 translate-middle text-white text-center "
  style={{
    fontSize : 20,
    zIndex: 2,
    textShadow: "0px 2px 10px rgba(0,0,0,0.8)"
  }}
>
 <h1 data-aos="fade-right"> Welcome To Healthyz </h1> <p className="text-white" data-aos="fade-left">- Your partner in Health</p> 
 <button data-aos="fade-left" className="btn btn-light text-dark fw-bold px-4 py-2">
  See Services
</button>
</div>

{/* First Image */}
<div
  className="rounded overflow-hidden"
  data-aos="fade-right"
  style={{
    width: "30rem",
    height: "30rem",
    backgroundImage: `url('DarkGreenImage.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.6)",
  }}
></div>

{/* Second Image */}
<div
  className="rounded overflow-hidden"
  data-aos="fade-left"
  style={{
    width: "48rem",
    height: "30rem",
    backgroundImage: `url('food Image.avif')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.6)",
  }}
></div>
</div>
      <SecondDiv />
      <ThirdDiv/>
      <ServicesDiv/>
      <Testimonials/>
      <Faq/>
      <ContactUs/>
      <Footer/>
      </div>
    </>
  );
}

export default HealthyzHome;
