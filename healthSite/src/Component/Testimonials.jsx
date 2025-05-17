import React, { useRef } from 'react';
import './Testimonials.css';
import { Container, Card } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const testimonialsData = [
  {
    name: 'Khader Shareef',
    bgColor: '#ffffff',
    text: "I had an amazing consultation session with Dr. Guthaaz Shukh. Mam for my family. She took the time to really listen to our concerns, and provided recommendations for us. I felt both practical and achievable. Her knowledge and expertise were clear, but understood out what was the ability to explain complex nutrition concepts in a way that was easy to understand. Let the session feeling motivated to make healthy changes. Thank you for your genuine care and support!",
    initial: 'K',
  },
  {
    name: 'Bharkavi Nathan',
    bgColor: '#ffffff',
    text: "I had struggle in reducing my weight as I had poor and at the age of 33 I was trying to conceive. That's when I met this beautiful soul through my friend. She helped me reduce weight and guided me to eat healthy diet that would help me in my journey to conceive. The most important part is she would constantly keep a check on me either by texting or calling me often to ask about my diet and check with my mental health as well. She even calls me now a day's now. I have a healthy baby by the grace of God and Dr. Guthaaz is one of the main person in this journey thanks a lot. I conceived within 8 months.",
    initial: 'B',
  },
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
    
    >
      <div className="ms-5">
        <h1 className="mt-4 fw-bold" style={{ fontSize: '2.5rem' }}>Testimonials</h1>
        <p className="mb-4 fw-bold text-muted" style={{ fontSize: '1.5rem' }}>Hear From Our Clients</p>
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
            height: '50px'
          }}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="scroll-btn right-btn bg-white text-dark p-3 rounded-circle shadow-lg border-0"
          onClick={() => scroll('right')}
          style={{ 
            position: 'absolute', 
            right: '-40px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px'
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
                width: '800px',
                minWidth: '800px',
                padding: '20px 0'
              }}
            >
              <Card
                className="p-4 shadow-lg h-100 border-0"
                style={{ 
                  backgroundColor: testimonial.bgColor,
                  borderRadius: '15px',
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle bg-secondary d-flex align-items-center justify-content-center me-3"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <h3 className="mb-0 fw-bold">{testimonial.name}</h3>
                    <div className="text-warning" style={{ fontSize: '1.5rem' }}>
                      ★★★★★
                    </div>
                  </div>
                </div>
                <Card.Text 
                  style={{ 
                    lineHeight: 1.8,
                    fontSize: '1.2rem',
                    color: '#666666',
                    textAlign: 'justify'
                  }}
                >
                  {testimonial.text}
                </Card.Text>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;