// src/components/Letters.js
import React from 'react';
import './Letters.css';

const Letters = ({ letters }) => {
  return (
    <section className="main-section">
        <h1 className="main-title">Tug of War</h1>
        <div className="letters-container">
        {letters.map((letter, index) => (
            <div key={index} className="letter-box">
            {letter}
            </div>
        ))}
        </div>
    </section>
  );
};

export default Letters;


