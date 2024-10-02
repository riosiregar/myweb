import React from 'react';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faTrophy, faCogs, faChartLine, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center">About ALPHA CORTEX</h2>
        <div className="row mt-5">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faBullseye} size="3x" className="mb-3 icon" />
                <h3 className="card-title">Vision</h3>
                <p className="card-text">To become a trusted partner in digital solutions, application development, and cybersecurity, supporting digital transformation for various types of businesses.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faTrophy} size="3x" className="mb-3 icon" />
                <h3 className="card-title">Mission</h3>
                <p className="card-text">To provide innovative and affordable digital development and security services, with a focus on quality, security, and customer satisfaction.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faCogs} size="3x" className="mb-3 icon" />
                <h3 className="card-title">Offered Services</h3>
                <ul className="list-unstyled text-left">
                  <li><strong>Mobile App Development:</strong> Creating user-friendly and high-performance mobile applications for iOS and Android platforms.</li>
                  <li><strong>Web Development:</strong> Building responsive websites and feature-rich web applications tailored to client needs.</li>
                  <li><strong>Application Penetration Testing:</strong> Providing application security testing services to identify and fix security vulnerabilities.</li>
                  <li><strong>Server Configuration:</strong> Offering secure and efficient server configuration services to support clients' business needs, both in cloud and physical environments.</li>
                  <li><strong>Network Configuration:</strong> Setting up and managing networks to ensure optimal performance and high security.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faChartLine} size="3x" className="mb-3 icon" />
                <h3 className="card-title">Target Market</h3>
                <ul className="list-unstyled text-left">
                  <li><strong>Startups and SMEs:</strong> Providing affordable and scalable solutions for small and medium-sized enterprises seeking digital transformation.</li>
                  <li><strong>Medium and Large Enterprises:</strong> Offering reliable and customized services for larger companies.</li>
                  <li><strong>Educational Institutions and Government:</strong> Assisting institutions in application development and digital infrastructure management.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3 icon" />
                <h3 className="card-title">Marketing Strategy</h3>
                <ul className="list-unstyled text-left">
                  <li><strong>Digital Marketing:</strong> Using SEO, SEM, and social media marketing to reach the target audience.</li>
                  <li><strong>Content Marketing:</strong> Creating blogs, whitepapers, and case studies to demonstrate expertise and project success.</li>
                  <li><strong>Networking and Partnerships:</strong> Building partnerships with other companies and attending tech conferences to expand the network.</li>
                  <li><strong>Testimonials and Portfolio:</strong> Showcasing testimonials from satisfied clients and successfully completed projects to attract potential clients.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#contact" className="btn btn-primary btn-lg">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;
