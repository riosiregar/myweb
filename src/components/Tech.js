import React from 'react';
import '../styles/Tech.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faMobileAlt, faCode, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact, faLaravel } from '@fortawesome/free-brands-svg-icons';

const Tech = () => {
  return (
    <section id="tech" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Our Technologies</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="tech-card">
              <FontAwesomeIcon icon={faCubes} size="4x" className="mb-3" />
              <h3 className="tech-title">QB-Core FiveM</h3>
              <p className="tech-description">Powerful framework for GTA V roleplay servers.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="tech-card">
              <FontAwesomeIcon icon={faMobileAlt} size="4x" className="mb-3" />
              <h3 className="tech-title">Flutter</h3>
              <p className="tech-description">Build natively compiled applications for mobile from a single codebase.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="tech-card">
              <FontAwesomeIcon icon={faReact} size="4x" className="mb-3" />
              <h3 className="tech-title">React</h3>
              <p className="tech-description">A JavaScript library for building user interfaces.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="tech-card">
              <FontAwesomeIcon icon={faCode} size="4x" className="mb-3" />
              <h3 className="tech-title">Lua Script</h3>
              <p className="tech-description">A powerful, efficient, lightweight, embeddable scripting language.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="tech-card">
              <FontAwesomeIcon icon={faLaravel} size="4x" className="mb-3" />
              <h3 className="tech-title">Laravel</h3>
              <p className="tech-description">The PHP framework for web artisans.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="tech-card">
              <FontAwesomeIcon icon={faShieldAlt} size="4x" className="mb-3" />
              <h3 className="tech-title">Advanced Penetration Tools</h3>
              <p className="tech-description">Comprehensive tools for advanced security testing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
