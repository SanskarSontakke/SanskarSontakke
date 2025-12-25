import React, { useRef } from 'react';
import './About.css';

// Import liquid-glass-react - if not available, will use fallback
let LiquidGlass;
try {
  // eslint-disable-next-line import/no-unresolved
  LiquidGlass = require('liquid-glass-react');
  if (LiquidGlass && LiquidGlass.default) {
    LiquidGlass = LiquidGlass.default;
  }
} catch (error) {
  // Fallback: Create a simple glass effect component
  LiquidGlass = ({ children, style, className, mouseContainer, ...props }) => (
    <div 
      style={{
        ...style,
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
      }} 
      className={className}
    >
      {children}
    </div>
  );
}

function About() {
  const containerRef = useRef(null);

  return (
    <section id="about" className="about" ref={containerRef}>
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <LiquidGlass
          mouseContainer={containerRef}
          displacementScale={100}
          blurAmount={0.5}
          saturation={140}
          aberrationIntensity={2}
          elasticity={0.1}
          cornerRadius={30}
          padding="3rem 2.5rem"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}
          className="about-card-liquid"
        >
          <div className="about-content">
            <div className="about-text">
              <p className="mb-2">
                I'm a passionate full-stack developer with one year of professional experience creating dynamic web and mobile applications. My journey in tech began when I started learning coding at the age of 9, and I've been hooked ever since.
              </p>
              <p>
                I have a diverse skill set spanning multiple high-demand technology domains including web development, mobile app development, Windows software development, IoT & hardware, networking, data recovery, prompt engineering, and version control. My core approach is to combine deep technical expertise with creative problem-solving, allowing me to deliver exceptional and intuitive user experiences from concept to deployment.
              </p>
            </div>
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
}

export default About;

