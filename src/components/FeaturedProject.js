import React, { useRef } from 'react';
import './FeaturedProject.css';

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

function FeaturedProject() {
  const containerRef = useRef(null);

  return (
    <section id="projects" className="featured-project" ref={containerRef}>
      <div className="container">
        <h2 className="text-center mb-4">Featured Project</h2>
        
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
          className="project-card-liquid"
        >
          <div className="project-card card">
            <div className="project-card-content">
              <div className="project-header">
                <h3 className="text-primary mb-3">ZPGuruji Shala</h3>
                <div className="project-category">
                  <span className="tag">Education</span>
                  <span className="tag">Mobile App</span>
                </div>
              </div>
              
              <p className="project-description text-secondary mb-4">
                ZPGuruji Shala is an educational quiz platform I developed, designed to help students practice and improve their knowledge across multiple subjects. The application features comprehensive quizzes in Physics, Chemistry, Biology, Mathematics, and General Knowledge.
              </p>
              
              <div className="project-technologies mb-4">
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#a78bfa' }}>Technologies Used:</h4>
                <div className="tags-container">
                  <span className="tag">Flutter</span>
                  <span className="tag">Dart</span>
                  <span className="tag">Firebase</span>
                </div>
              </div>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.zpguruji.shala&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on Google Play
              </a>
            </div>
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
}

export default FeaturedProject;

