import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      title: 'Web Development',
      description: 'Building responsive, high-performance websites and web applications.',
      technologies: ['React.js', 'Next.js', 'Node.js', 'Vercel', 'Supabase', 'Turbo']
    },
    {
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications for both iOS and Android.',
      technologies: ['React Native', 'Flutter', 'Dart', 'C#/.NET MAUI']
    },
    {
      title: 'Windows Software Dev',
      description: 'Developing native desktop applications specifically for the Windows ecosystem.',
      technologies: ['Flutter', 'Inno Setup']
    },
    {
      title: 'IoT & Hardware',
      description: 'Prototyping and programming custom hardware solutions.',
      technologies: ['Arduino', 'Espressif', 'Raspberry Pi', 'C++', 'Python']
    },
    {
      title: 'Networking',
      description: 'Understanding and configuring complex network protocols and infrastructure.',
      technologies: ['TCP/IP', 'DNS', 'Firewalls']
    },
    {
      title: 'Data Recovery',
      description: 'Specialized in recovering lost or corrupted data from various storage devices.',
      technologies: ['Forensics', 'File Systems']
    },
    {
      title: 'Prompt Engineering',
      description: 'Crafting and optimizing advanced prompts to get the best possible output from AI models.',
      technologies: ['Gemini API', 'LLMs', 'AI Integration']
    },
    {
      title: 'Version Control',
      description: 'Managing codebases and collaborating effectively with teams using version control systems.',
      technologies: ['Git', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="text-center mb-4">Skills & Domains</h2>
        <p className="section-subtitle text-center mb-4">
          I have a diverse skill set that spans across multiple high-demand technology domains
        </p>
        
        <div className="skills-grid grid grid-4">
          {skills.map((skill, index) => (
            <div key={index} className="card skill-card">
              <h3 className="text-primary mb-2">{skill.title}</h3>
              <p className="text-secondary mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                {skill.description}
              </p>
              <div className="skill-technologies">
                <h4 style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#a78bfa' }}>Technologies:</h4>
                <div className="tags-container">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

