import React, { useState, useRef } from 'react';
import './LanguagesTools.css';

import LiquidGlass from './ui/LiquidGlass';

function LanguagesTools() {
  const containerRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = [
    {
      name: 'Languages',
      icon: '💻',
      color: '#667eea',
      technologies: ['C', 'C++', 'Python', 'Dart', 'JavaScript', 'TypeScript']
    },
    {
      name: 'Web',
      icon: '🌐',
      color: '#764ba2',
      technologies: ['HTML', 'CSS']
    },
    {
      name: 'Version Control',
      icon: '🔧',
      color: '#f093fb',
      technologies: ['Git']
    }
  ];

  return (
    <section id="languages" className="languages-tools" ref={containerRef}>
      <div className="container">
        <h2 className="text-center mb-4">Languages & Tools</h2>
        <p className="section-subtitle text-center mb-4">
          These are the primary technologies I use to bring ideas to life
        </p>

        <div className="tools-grid">
          {techCategories.map((category, categoryIndex) => (
            <LiquidGlass
              key={categoryIndex}
              mouseContainer={containerRef}
              displacementScale={100}
              blurAmount={0.5}
              saturation={140}
              aberrationIntensity={2}
              elasticity={0.1}
              cornerRadius={30}
              padding="2rem"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="tool-category-card-liquid"
            >
              <div
                className="tool-category-content"
                style={{ '--category-color': category.color }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.name}</h3>
                </div>

                <div className="technologies-list">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="tech-item"
                      onMouseEnter={() => setHoveredTech(`${categoryIndex}-${techIndex}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LanguagesTools;
