import React, { useRef } from 'react';
import './Testimonials.css';
import { Container, Card } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const testimonialsData = [
  {
    name: 'Prasad Dhamorikar',
    bgColor: '#FF8A65',
    text: "I was here for angioplasty. Experience was really great. Dr. Kalmath explained everything in detail about all procedures. Floor manager Dipul Gamre assisted to the core. Dietician Gulnaz explained diet with extreme details. Also provided the diet charts online as well as printed on paper. Nurses were absolutely helpful. Overall experience was 5 star...",
    initial: 'P',
    dpColor: "#013529",
    rating: 5,
    timeAgo: "2 months ago"
  },
  {
    name: 'Kumar "RamSiyaRam" P',
    bgColor: '#4AC6D6',
    text: "Dietician Dr Gulnaaz Sheikh has been an excellent dietician with personal care and concern. We are very pleased to have her as our dietician. Thanks",
    initial: 'K',
    dpColor: "#6B28C3",
    rating: 5,
    timeAgo: "2 months ago"
  },
  {
    name: 'Sharada Panigrahi',
    bgColor: '#66BB6A',
    text: "I had a very positive experience at KIMS Hospital, and I am truly grateful for the care and support I received throughout my treatment. The housekeeping staff maintained excellent cleanliness and hygiene at all times, which made my stay very comfortable and stress-free. A special thanks to Dietician Gulnaz Shaik for her thoughtful guidance and well-planned diet. I would like to specially appreciate Pooja from the PCE team for her exceptional care and support.",
    initial: 'S',
    dpColor: "#B71C1C",
    rating: 5,
    timeAgo: "a month ago"
  },
  {
    name: 'Sunil Patel (Jeet)',
    bgColor: '#AB47BC',
    text: "A very good hospital with caring doctors and supportive staff. Special appreciation to Dr. Shilpa Gupta. I would also like to thank senior dietitian Dr. Gulnaaz Shaikh for her professionalism. She ensures the food is healthy, well-balanced, and delicious, which plays a key role in faster recovery.",
    initial: 'S',
    dpColor: "#E65100",
    rating: 5,
    timeAgo: "2 months ago"
  },
  {
    name: 'Rahul Pillai (theGeekyLad)',
    bgColor: '#26A69A',
    text: "Met Dr. Gulnaaz Shaikh at KIMS — definitely one of the best dieticians out there! I could tell the passion for the subject in her tone as she walked me through my blood reports and offered detailed advice on the right food habits. The do's are great to know but the don'ts are paramount. Dr. Gulnaaz was kind enough to explain across the deck with clarity. Definitely recommend KIMS for the warm staff as well and Dr. Gulnaaz especially if you're looking for expert dietary guidance.",
    initial: 'R',
    dpColor: "#1A237E",
    rating: 5,
    timeAgo: "3 months ago"
  }
];


const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container
      className="testimonials-container py-5"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="ms-2">
        <h1 className="mt-4" style={{
          fontSize: '36px',
          fontWeight: 600,
          color: '#2B2B2B'
        }}>
          Testimonials
        </h1>
        <p className="mb-4" style={{
          fontSize: '24px',
          color: '#666',
          fontWeight: 500
        }}>
          Hear From Our Clients
        </p>
      </div>

      <div className="position-relative">
        <button
          className="scroll-btn left-btn bg-white text-dark p-3 rounded-circle shadow-lg border-0"
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            zIndex: 2
          }}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="scroll-btn right-btn bg-white text-dark p-3 rounded-circle shadow-lg border-0"
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            zIndex: 2
          }}
        >
          <FaChevronRight size={20} />
        </button>

        <div
          className="d-flex overflow-auto scroll-container px-4"
          ref={scrollRef}
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card me-5 flex-shrink-0"
              style={{
                width: '500px',
                minWidth: '550px',
                padding: '20px 0',
              }}
            >
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: testimonial.bgColor,
                  borderRadius: '15px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  color: "white"
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#FFFFFF',
                      backgroundColor: testimonial.dpColor
                    }}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <h3 className="mb-1" style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'white'
                    }}>
                      {testimonial.name}
                    </h3>
                    <div style={{
                      color: '#FFD700',
                      fontSize: '18px',
                      lineHeight: 1
                    }}>
                      ★★★★★
                    </div>
                    <div style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '13px',
                      marginTop: '3px'
                    }}>
                      {testimonial.timeAgo}
                    </div>
                  </div>
                </div>
                <hr className="border-2 border-white opacity-100" />
                <p style={{
                  lineHeight: 1.5,
                  fontSize: '16px',
                  color: 'white',
                  margin: 0,
                  flex: 1
                }}>
                  {testimonial.text}
                </p>
                <div style={{
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  opacity: 0.85
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span style={{ color: 'white', fontSize: '13px', fontWeight: 500 }}>Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;