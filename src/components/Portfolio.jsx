import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;