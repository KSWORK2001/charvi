// src/pages/AboutCharvi.js
import React from 'react';
import './AboutCharvi.css';

const AboutCharvi = () => {
  return (
    <section className="main-section">
      <div className="about-content">
        <div className="text-content">
          <h1 className="main-title">About the Weirdo</h1>
          <p className="main-paragraph">
            Learn more about us...
          </p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/charvi.jpg`} alt="Charvi" className="charvi-image" />
      </div>
    </section>
  );
};

export default AboutCharvi;
