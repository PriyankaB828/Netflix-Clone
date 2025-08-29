import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Stranger Things</h1>
        <p className="hero-description">
          A love letter to the '80s classics that captivated a generation, Stranger Things is a thrilling drama.
        </p>
        <div className="hero-buttons">
          <button className="play-btn">▶ Play</button>
          <button className="info-btn">ℹ More Info</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
