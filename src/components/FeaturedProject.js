import React from 'react';
import './FeaturedProject.css';

function FeaturedProject() {
  return (
    <section id="projects" className="featured-project">
      <div className="container">
        <h2 className="text-center mb-4">Featured Project</h2>
        
        <div className="project-card card">
          <div className="project-header">
            <h3 className="text-primary mb-2">ZPGuruji Shala</h3>
            <div className="project-category">
              <span className="tag">Education</span>
              <span className="tag">Mobile App</span>
            </div>
          </div>
          
          <p className="project-description text-secondary mb-3">
            ZPGuruji Shala is an educational quiz platform I developed, designed to help students practice and improve their knowledge across multiple subjects. The application features comprehensive quizzes in Physics, Chemistry, Biology, Mathematics, and General Knowledge.
          </p>
          
          <div className="project-technologies mb-3">
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
    </section>
  );
}

export default FeaturedProject;

