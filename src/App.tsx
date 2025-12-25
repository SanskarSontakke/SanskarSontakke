import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LanguagesTools from './components/LanguagesTools';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import AcademicExcellence from './components/AcademicExcellence';
import Footer from './components/Footer';
import ShaderBackground from './components/ui/shader-background';
import { GlassFilter } from './components/ui/liquid-glass';

function App() {
  return (
    <div className="App">
      <GlassFilter />
      <ShaderBackground />
      <Header />
      <Hero />
      <About />
      <LanguagesTools />
      <Skills />
      <FeaturedProject />
      <AcademicExcellence />
      <Footer />
    </div>
  );
}

export default App;

