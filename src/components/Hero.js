import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="text-primary">Sanskar Sontakke</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer • Creative Problem Solver • Tech Enthusiast
          </p>
          <p className="hero-description">
            Building exceptional web and mobile experiences with modern technologies
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

