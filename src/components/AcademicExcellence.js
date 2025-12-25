import React, { useRef } from 'react';
import './AcademicExcellence.css';

import LiquidGlass from './ui/LiquidGlass';

function AcademicExcellence() {
  const containerRef = useRef(null);

  const achievements = [
    {
      year: 'Class 5',
      title: 'Scholarship',
      description: 'Achieved scholarship for outstanding academic performance.',
      type: 'Academic'
    },
    {
      year: 'Class 6',
      title: 'Homi Bhabha Silver Medal',
      description: 'Received Homi Bhabha Silver Medal for excellence in science.',
      type: 'Science'
    },
    {
      year: 'Class 7',
      title: 'MOMS Exam - State Rank 2',
      description: 'Secured distinction with State Rank 2 in MOMS examination.',
      type: 'Competition'
    },
    {
      year: 'Class 7',
      title: 'IMO & NSO Gold Medal',
      description: 'Achieved Gold Medal in both International Mathematics Olympiad (IMO) and National Science Olympiad (NSO).',
      type: 'Olympiad'
    },
    {
      year: 'Class 8',
      title: 'Scholarship',
      description: 'Achieved scholarship for continued academic excellence.',
      type: 'Academic'
    },
    {
      year: '2024',
      title: 'Pragya Competition - First Prize',
      description: 'Won first prize at the 2024 Pragya competition.',
      type: 'Competition'
    }
  ];

  return (
    <section id="academic" className="academic-excellence" ref={containerRef}>
      <div className="container">
        <h2 className="text-center mb-4">Academic Excellence</h2>
        <p className="section-subtitle text-center mb-4">
          A timeline of my academic achievements and recognitions
        </p>

        <div className="timeline-container">
          <div className="timeline-wrapper">
            <svg className="timeline-path" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 16.67 20 L 50 20 L 83.33 20 L 83.33 80 L 50 80 L 16.67 80"
                fill="none"
                stroke="url(#timelineGradient)"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(102, 126, 234, 1)" />
                  <stop offset="50%" stopColor="rgba(102, 126, 234, 1)" />
                  <stop offset="100%" stopColor="rgba(118, 75, 162, 1)" />
                </linearGradient>
              </defs>
            </svg>
            {achievements.map((achievement, index) => {
              // Determine position: 0-2 are top row (left to right), 3-5 are bottom row (right to left)
              const isTopRow = index < 3;
              // Top row: 0=col1, 1=col2, 2=col3
              // Bottom row: 3=col3, 4=col2, 5=col1 (reversed)
              const gridColumn = isTopRow ? index + 1 : 6 - index;
              const gridRow = isTopRow ? 1 : 2;

              return (
                <div
                  key={index}
                  className={`timeline-item ${isTopRow ? 'top-row' : 'bottom-row'}`}
                  style={{
                    gridColumn: gridColumn,
                    gridRow: gridRow
                  }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-point"></div>
                  </div>
                  <LiquidGlass
                    mouseContainer={containerRef}
                    displacementScale={100}
                    blurAmount={0.5}
                    saturation={140}
                    aberrationIntensity={2}
                    elasticity={0.1}
                    cornerRadius={30}
                    padding="1.5rem"
                    className="achievement-card-liquid"
                  >
                    <div className="achievement-card">
                      <div className="achievement-card-content">
                        <div className="achievement-year">
                          <span className="year-badge">{achievement.year}</span>
                        </div>
                        <div className="achievement-details">
                          <h3 className="achievement-title">{achievement.title}</h3>
                          <p className="achievement-description">{achievement.description}</p>
                          <span className="achievement-type">{achievement.type}</span>
                        </div>
                      </div>
                    </div>
                  </LiquidGlass>
                </div>
              );
            })}
          </div>
        </div>

        <div className="current-status">
          <p className="text-center text-secondary">
            Currently studying in <span className="text-primary">Class 9</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AcademicExcellence;

