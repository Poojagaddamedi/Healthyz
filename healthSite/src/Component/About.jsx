import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import './About.css';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <>
      <div className="about-hero" style={{
        position: "relative",
        width: "100%",
        height: "350px",
        backgroundImage: "url('aboutUs.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        color: "white",
      }}>
        <div className="hero-overlay" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }} />
        <div className="hero-content" style={{ zIndex: 2 }}>
          <h1 className="hero-title" style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
            margin: 0,
          }}>
            About Us
          </h1>
          <h6 className="hero-subtitle" style={{
            fontSize: "1rem",
            fontWeight: "bold",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
            marginTop: "0.5rem",
          }}>
            Meet Dr. Gulnaz Shaikh (Founder)
          </h6>
        </div>
      </div>


      {/* Second Portion */}
      <div className="about-main-content" style={{
        marginTop: "3rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1200px",
        gap: "2rem",
      }}>

        {/* Left Section */}
        <div className="text-content" style={{ flex: 1, minWidth: "300px" }}>
          <p className="about-description" style={{
            fontSize: "16px",
            lineHeight: "1.4",
            color: "#333",
            fontWeight: "500",
            textAlign: "justify",
            marginBottom: "1.5rem",
            marginLeft: "7rem"
          }}>
            <span style={{ display: "block", textIndent: "5em", marginBottom: "0.3em" }}>
              Dr. Gulnaz Shaikh's incredible 20-year journey in nutrition and dietetics is the foundation of her brand, standing as a beacon of health and wellness. Her career has been driven by a deep passion for helping individuals achieve their health goals naturally, using food as medicine.
            </span>
            <span style={{ display: "block", textIndent: "5em", marginBottom: "0.3em" }}>
              From managing chronic conditions like diabetes and hormonal imbalances to supporting cancer patients and guiding mothers through pregnancy and lactation, Dr. Shaikh has dedicated her life to creating customized, side-effect-free solutions for a healthier world.
            </span>
            <span style={{ display: "block", textIndent: "5em" }}>
              Rooted in a science-informed philosophy that combines science and empathy, her approach dwells on balanced nutrition and lifestyle modifications with a purpose of empowering the individual with knowledge...
            </span>
          </p>


          <div className="philosophy-box" style={{
            backgroundColor: "#77D4E0",
            padding: "1.5rem",
          }}>
            <h2 style={{
              color: "#fff", fontSize: "22px", marginBottom: "0.5rem",
              marginLeft: "6rem"
            }}>Philosophy</h2>
            <p style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#fff",
              marginLeft: "6rem"
            }}>
              Dr. Shaikh strongly believes in a drug-free approach to health, focusing on:<br />
              <strong>•</strong> Diet without supplements: No artificial enhancement of nutrient intake.<br />
              <strong>•</strong> No starvation methods: Sustainable, filling meal plans.<br />
              <strong>•</strong> Home-made and functional foods: For your lifestyle and nutritional needs.<br />
              <strong>•</strong> Balanced approach: 80% diet, 20% exercise for effective and sustainable results.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="doctor-image-container" style={{
          flex: "0 1 350px",
          position: "relative",
          textAlign: "center",
        }}>
          <div
            style={{
              height: "29rem",
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              backgroundImage: "url('DSC_0052.JPG.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
              backgroundRepeat: "no-repeat",
              position: "relative",
              overflow: "hidden"
            }}
            role="img"
            aria-label="Dr. Gulnaaz Shaikh"
          >
            {/* Blue Shadow at Bottom */}
            {/* <div style={{
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "6rem",
    background: "linear-gradient(to top, rgba(1, 53, 41, 1), transparent)",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    pointerEvents: "none"
  }}></div> */}

            {/* Label Text
  <div style={{
    position: "absolute",
    bottom: "0.5rem",
    width: "100%",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
    textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
  }}>
    Dr. Gulnaaz Shaikh (Founder)
  </div> */}
          </div>
        </div>
      </div>


      {/* QUALIFICATIONS & ACHIEVEMENTS */}
      <div className="qualifications-section" style={{ flex: 1, minWidth: "600px", marginTop: "2rem" }}>
        <h2 className="section-title" style={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#2B2B2B",
          marginBottom: "1rem",
          marginLeft: "7rem"
        }}>
          Qualifications & Achievements
        </h2>

        <div style={{
          columns: 1,
          columnGap: "0.6rem",
          paddingLeft: "75px"
        }}>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: "16px",
            lineHeight: "1",
            color: "#444"
          }}>
            {[
              "Registered Dietitian (RD) - Expertise in Clinical Nutrition",
              "Master of Philosophy (MPhil) in Food and Nutrition",
              "B.Ed in Human Psychology",
              "Certified Keto Therapist: Expertise in managing Weight Loss, Diabetes, Epilepsy, and Cancer Nutrition",
              "Certified Diabetic Educator with focus on diabetes management",
              "Bariatric Nutritionist: Expertise in Pre/Post Bariatric surgery diets",
              "Specialized in Child Nutrition and Child Care",
              "FODMAP Dietitian - Expertise in managing digestive disorders",
              "Senior Life Member: Indian Dietitian Association (IDA)",
              "Life Member: Association of Allied Health Professionals (AAHP)",
              "Medical Transcriptionist (MT)",
              "Sr. Executive Dietitian at Kokilaben Dhirubhai Ambani Hospital",
              "Professional experience with VLCC, Healthify, and Madhurbaug",
              "Presented research paper at Global Conference in Dubai"
            ].map((item, idx) => (
              <li key={idx} style={{
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem"
              }}>
                <span style={{
                  fontSize: "1.5em",
                  lineHeight: "1",
                  verticalAlign: "middle",
                  marginLeft: "3rem"
                }}>•</span>
                <span style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "1"
                }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Values At Healthyz */}
      <div className="values-section" style={{
        display: "flex",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        marginTop: "1.8rem",
        marginLeft: "7rem"
      }}>
        <div className="values-image" style={{ flex: 1, minWidth: "400px", marginTop: "2rem" }}>
          <img
            src="freepik__the-style-is-candid-image-photography-with-natural__79822.png"
            alt="Healthy Lifestyle"
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)"
            }}
          />
        </div>

        {/* Right Content Section */}
        <div className="values-content" style={{ flex: 1, paddingRight: "70px" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#2B2B2B",
            marginBottom: "1rem"
          }}>
            Values At Healthyz
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                title: "Simplicity",
                text: "Health through simple, realistic, and natural choices."
              },
              {
                title: "Integrity",
                text: "Keep the promise of drug-free, sustainable lifestyles."
              },
              {
                title: "Empowerment",
                text: "Educate and inspire individuals to be healthy."
              },
              {
                title: "Accessibility",
                text: "Make health solutions accessible to everyone, regardless of their background."
              },
              {
                title: "Sustainability",
                text: "Push for sustainable lifestyles over fad diets or quick fixes."
              }
            ].map((item, index) => (
              <div key={index} style={{ display: "flex", gap: "0.4rem" }}>
                <div style={{
                  fontSize: "15px",
                  color: "black",
                  lineHeight: "1",
                  marginTop: "0.2rem"
                }}>•</div>
                <div>
                  <h3 style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#2B2B2B",
                  }}>
                    {item.title} : {item.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div>
            {!isMobile && (
              <button
                className="btn btn-light my-3 px-4 py-2"
                style={{
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  backgroundColor: '#013529',
                  color: 'white',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                onClick={handleClick}
              >
                Schedule Call
              </button>
            )}
          </div>
        </div>
      </div>



      <Testimonials />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  )
}

export default About
