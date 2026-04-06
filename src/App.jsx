import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
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
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          top: '-100px',
          left: '16px',
          zIndex: 9999,
          bgcolor: 'background.paper',
          color: 'primary.main',
          px: 2,
          py: 1,
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: 1,
          textDecoration: 'none',
          fontWeight: 800,
          transition: 'top 0.3s',
          '&:focus': {
            top: '16px',
            outline: '2px solid rgba(0, 255, 136, 0.8)',
            outlineOffset: '2px'
          }
        }}
      >
        Skip to main content
      </Box>
      <div className="portfolio-app">
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
