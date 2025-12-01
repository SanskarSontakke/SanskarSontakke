import React, { useState } from 'react';
import './LanguagesTools.css';

function LanguagesTools() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = [
    {
      name: 'Languages',
      icon: '💻',
      color: '#667eea',
      technologies: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'Dart', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 }
      ]
    },
    {
      name: 'Web',
      icon: '🌐',
      color: '#764ba2',
      technologies: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 }
      ]
    },
    {
      name: 'Version Control',
      icon: '🔧',
      color: '#f093fb',
      technologies: [
        { name: 'Git', level: 90 }
      ]
    }
  ];

  return (
    <section id="languages" className="languages-tools">
      <div className="container">
        <h2 className="text-center mb-4">Languages & Tools</h2>
        <p className="section-subtitle text-center mb-4">
          These are the primary technologies I use to bring ideas to life
        </p>
        
        <div className="tools-grid">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="tool-category-card"
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
                    <div className="tech-name-row">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-level-text">{tech.level}%</span>
                    </div>
                    <div className="tech-level-bar">
                      <div 
                        className="tech-level-fill"
                        style={{ 
                          width: `${tech.level}%`,
                          backgroundColor: category.color
                        }}
                      ></div>
                    </div>
                    {hoveredTech === `${categoryIndex}-${techIndex}` && (
                      <div className="tech-tooltip">
                        Proficiency: {tech.level}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LanguagesTools;
