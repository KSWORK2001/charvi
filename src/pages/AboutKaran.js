// src/pages/AboutCharvi.js
import React from 'react';
import './AboutCharvi.css';

const AboutKaran = () => {
  return (
    <section className="main-section">
      <div className="about-content">
        <div className="text-content">
          <h1 className="main-title">About the Grandpa</h1>
          <p className="main-paragraph">
            Learn more about us...
          </p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/karan.jpg`} alt="Karan" className="karan-image" />
      </div>
    </section>
  );
};

export default AboutKaran;
