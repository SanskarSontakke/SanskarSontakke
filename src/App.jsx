import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
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
        <Box component="a" href="#main-content" className="skip-link" sx={{ position: 'absolute', top: '-100px', left: 0, padding: 2, backgroundColor: 'background.paper', color: 'primary.main', zIndex: 9999, textDecoration: 'none', fontWeight: 800, '&:focus': { top: 0 } }}>Skip to main content</Box>
        <TraceCanvas />
        <RippleCanvas />
        <Navbar />
        
        <main id="main-content" tabIndex="-1" style={{ outline: 'none' }}>
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
