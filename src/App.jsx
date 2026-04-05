import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import TraceCanvas from './components/TraceCanvas';
import RippleCanvas from './components/RippleCanvas';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProjectGrid from './components/ProjectGrid';
import SkillsBoard from './components/SkillsBoard';
import Achievements from './components/Achievements';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="portfolio-app">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <TraceCanvas />
        <RippleCanvas />
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <AboutSection />
          <TechStack />
          <SkillsBoard />
          <ProjectGrid />
          <Achievements />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
