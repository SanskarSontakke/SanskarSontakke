import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

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

function Hero() {
  const containerRef = useRef(null);
  const titles = ['Full-Stack Developer', 'Creative Problem Solver', 'Tech Enthusiast'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(50);
          }, 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="container">
        <div className="hero-cards-wrapper">
          <LiquidGlass
            mouseContainer={containerRef}
            displacementScale={150}
            blurAmount={0}
            saturation={180}
            aberrationIntensity={3.5}
            elasticity={0.5}
            cornerRadius={30}
            mode="shader"
            padding="3rem 2.5rem"
            style={{
              flex: 1,
              minHeight: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="hero-card-left-liquid"
          >
            <div className="hero-content-wrapper">
              <span className="floating-class-tag">Class 9th</span>
              <div className="hero-content">
                <h1 className="hero-title">
                  Hi, I'm <span className="text-primary">Sanskar Sontakke</span>
                </h1>
                <p className="hero-subtitle">
                  <span className="typing-text">{displayedText}</span>
                  <span className="typing-cursor">|</span>
                </p>
                <p className="hero-description">
                  Building exceptional web and mobile experiences with modern technologies
                </p>
              </div>
            </div>
          </LiquidGlass>
          <LiquidGlass
            mouseContainer={containerRef}
            displacementScale={150}
            blurAmount={0}
            saturation={180}
            aberrationIntensity={3.5}
            elasticity={0.5}
            cornerRadius={30}
            mode="shader"
            padding="2rem"
            style={{
              flex: 1,
              minHeight: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="hero-card-right-liquid"
          >
            <div className="hero-photo-wrapper">
              <div className="hero-photo-container">
                <img 
                  src="https://via.placeholder.com/400x500/667eea/ffffff?text=Sanskar+Sontakke" 
                  alt="Sanskar Sontakke" 
                  className="hero-photo"
                />
              </div>
            </div>
          </LiquidGlass>
        </div>
      </div>
    </section>
  );
}

export default Hero;

