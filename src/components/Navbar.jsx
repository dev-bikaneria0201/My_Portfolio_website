import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Tools', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dev Bikaneria
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollToSection(link)} className="text-gray-300 hover:text-cyan-400 transition-colors">
                {link}
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
