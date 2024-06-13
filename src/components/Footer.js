import React, { useEffect, useState, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const startDate = new Date('2024-05-12');
  const [daysPassed, setDaysPassed] = useState(0);
  const [isBroken, setIsBroken] = useState(false);
  const [hearts, setHearts] = useState([]);
  const footerRef = useRef(null);

  useEffect(() => {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysPassed(diffDays);

    // Generate hearts every second
    const interval = setInterval(() => {
      generateHeart();
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const generateHeart = () => {
    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      const heart = {
        id: Date.now(),
        left: Math.random() * footerRect.width,
        top: Math.random() * footerRect.height,
      };
      setHearts((prevHearts) => [...prevHearts, heart]);
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
      }, 3000);
    }
  };

  const handleHover = () => {
    setHearts([]);
  };

  const handleAnimationEnd = () => {
    setIsBroken(true);
    setTimeout(() => setIsBroken(false), 1000); // Reset after 1s
  };

  return (
    <footer className="footer" ref={footerRef}>
      <div 
        className={`days-passed ${isBroken ? 'broken' : ''}`} 
        data-text={`${daysPassed} days of Headaches *ughh*`}
        onAnimationEnd={handleAnimationEnd}
      >
        {daysPassed} days of Headaches *ughh*
      </div>
      <div 
        onMouseOver={handleHover}
      >
        Always and Forever
      </div>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{ left: `${heart.left}px`, top: `${heart.top}px` }}
        ></div>
      ))}
    </footer>
  );
};

export default Footer;
