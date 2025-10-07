import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Dev Bikaneria
            </h3>
            <p className="text-gray-400">
              Software Developer passionate about creating impactful web applications and solving real-world problems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="https://linkedin.com/in/dev-bikaneria-783640227" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/dev-bikaneria0201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="mailto:devbikaneria@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
                <span>devbikaneria@gmail.com</span>
              </a>
              <a href="tel:+918875001567" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone size={20} />
                <span>+91 8875001567</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Dev Bikaneria. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
