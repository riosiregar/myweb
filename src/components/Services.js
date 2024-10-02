import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import '../styles/Services.css';

const servicesData = [
  { title: 'Mobile App Development', text: 'We craft intuitive and efficient mobile applications.' },
  { title: 'Web App Development', text: 'Tailored web solutions for your business needs.' },
  { title: 'Penetration Testing', text: 'Ensuring your applications are secure from vulnerabilities.' },
  { title: 'Cloud / Physical Server Configuration', text: 'Optimizing your server infrastructure for performance.' },
  { title: 'Network Configuration', text: 'Setting up secure and efficient networks for your operations.' },
  { title: 'FiveM GTA V Game Development', text: 'Creating engaging game experiences within the GTA V universe.' },
];

const Services = () => {
  return (
    <section id="services" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Carousel interval={2500}>
          {servicesData.map((service, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} lg={6}>
                  <Card className="text-center">
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>{service.text}</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Services;
