import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesDiv.css';

const ServicesDiv = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Weight Management",
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
      description: "Reach your perfect weight with a tailored, long-term solution. Our individualized diet plans help you lose or gain weight...",
      color: "watermelon"
    },
    {
      title: "Heart Disease Nutrition",
      image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      description: "A heart-healthy diet is central to cardiovascular health. We craft nutrition plans that lower cholesterol, control blood pressure...",
      color: "watermelon"
    },
    {
      title: "Gastrointestinal Health",
      image: "https://media.istockphoto.com/id/1358921826/photo/human-digestive-system.jpg?s=612x612&w=0&k=20&c=tkcI3RaKeQpW9kVgtKItj5MKWkgG9-0_GGv7ClBB74o=",
      description: "Enhance digestion and gut health through tailored nutrition plans. Our strategy addresses problems such as IBS, Crohns disease...",
      color: "watermelon"
    },
    {
      title: "Diabetes Care",
      image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Manage diabetes in a systematic, nutrition-rich way. Our programs rely on balancing blood glucose levels with tasty, healthy food choices...",
      color: "strawberry"
    },
    {
      title: "Kidney Disease Management",
      image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description: "Support your kidneys with a medical diet that suits requirements. Our programs regulate sodium, potassium, the intake...",
      color: "strawberry"
    },
    {
      title: "Liver Disease Nutrition",
      image: "https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Maximize your liver wellness with a meal plan tailored to healing. We offer specific nutritional solutions for the management...",
      color: "strawberry"
    }
  ];

  return (
    <Container className="my-1 services-container services-section">

      <div >
        <h1 className="mt-4">Our Services</h1>
        <p className="mb-4 fw-bold">Comprehensive Healthcare Solutions</p>
      </div>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4} data-aos="fade-up" data-aos-delay={index % 3 * 200}>
            <div className={`service-card h-100 shadow-lg rounded-4 overflow-hidden`}>
              <div className="card-image-container">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                />
                <div className={`image-overlay bg-${service.color}`}></div>
              </div>
              <div className="card-body p-4">
                <h3 className={`card-title fw-bold text-${service.color}`}>
                  {service.title}
                </h3>
                <hr className={`w-25 mx-auto my-4 divider-${service.color}`} />
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesDiv;