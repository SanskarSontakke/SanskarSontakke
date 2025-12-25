import React, { useRef } from 'react';
import './FeaturedProject.css';

import LiquidGlass from './ui/LiquidGlass';

function FeaturedProject() {
  const containerRef = useRef(null);

  const projects = [
    {
      title: "ZPGuruji Shala",
      category: ["Education", "Mobile App"],
      description: "ZPGuruji Shala is an educational quiz platform I developed, designed to help students practice and improve their knowledge across multiple subjects. The application features comprehensive quizzes in Physics, Chemistry, Biology, Mathematics, and General Knowledge.",
      technologies: ["Flutter", "Dart", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.zpguruji.shala&hl=en",
      linkText: "View on Google Play"
    },
    {
      title: "The Forge Gen",
      category: ["AI Platform", "Open Source"],
      description: "A platform offering a suite of open-source generative AI tools powered by Google AI Studio and the Gemini API. Features include specialized tools for video storyboarding, food styling, design mockups, and more.",
      technologies: ["React", "TypeScript", "Gemini API", "Tailwind CSS"],
      link: "https://theforgegen.vercel.app/",
      linkText: "View Website"
    }
  ];

  return (
    <section id="projects" className="featured-project" ref={containerRef}>
      <div className="container">
        <h2 className="text-center mb-5">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <LiquidGlass
              key={index}
              mouseContainer={containerRef}
              displacementScale={100}
              blurAmount={0.5}
              saturation={140}
              aberrationIntensity={2}
              elasticity={0.1}
              cornerRadius={30}
              padding="3rem 2.5rem"
              style={{
                width: '100%',
                height: '100%'
              }}
              className="project-card-liquid"
            >
              <div className="project-card card">
                <div className="project-card-content">
                  <div className="project-header">
                    <h3 className="text-primary mb-3">{project.title}</h3>
                    <div className="project-category">
                      {project.category.map((cat, i) => (
                        <span key={i} className="tag">{cat}</span>
                      ))}
                    </div>
                  </div>

                  <p className="project-description text-secondary mb-4">
                    {project.description}
                  </p>

                  <div className="project-technologies mb-4">
                    <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#a78bfa' }}>Technologies Used:</h4>
                    <div className="tags-container">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
