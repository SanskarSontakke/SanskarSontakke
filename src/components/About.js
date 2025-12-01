import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="mb-2">
              I'm a passionate full-stack developer with one year of professional experience creating dynamic web applications. My journey in tech began when I built my first website at 13, and I've been hooked ever since.
            </p>
            <p>
              I specialize in modern JavaScript frameworks and possess a keen eye for design. My core approach is to combine deep technical expertise with creative problem-solving, allowing me to deliver exceptional and intuitive user experiences from concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

