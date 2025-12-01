import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LanguagesTools from './components/LanguagesTools';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <LanguagesTools />
      <Skills />
      <FeaturedProject />
      <Footer />
    </div>
  );
}

export default App;
