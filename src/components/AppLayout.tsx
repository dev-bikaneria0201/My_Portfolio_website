import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Tools from './Tools';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const AppLayout: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <About />
      <Skills />
      <Tools />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
