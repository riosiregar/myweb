import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container text-center">
        <h2>Contact Us</h2>
        <p className="lead">Ready to start your project? Reach out to us now!</p>
        <a href="mailto:contact@alphacortex.com" className="btn btn-outline-light btn-lg">Email Us</a>
      </div>
    </section>
  );
};

export default Contact;
