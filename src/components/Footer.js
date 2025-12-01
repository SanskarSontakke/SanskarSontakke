import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/SanskarSontakke" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:sanskarsontakke@gmail.com">
              Email
            </a>
          </div>
          <p className="footer-copyright text-center">
            &copy; {new Date().getFullYear()} Sanskar Sontakke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

