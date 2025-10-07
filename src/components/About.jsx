import React from 'react';
import { Download, Mail } from 'lucide-react';

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/RESUME_DEV_BIKANERIA.pdf';
    link.download = 'RESUME_DEV_BIKANERIA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Dev Bikaneria</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6">Software Developer</h2>
            <p className="text-xl text-gray-300 mb-2">React / Frontend Developer</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Aspiring to establish myself as a dynamic and successful professional in the field of computer science. 
              Passionate about building impactful web applications, enhancing user experience, and leveraging modern 
              technologies to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={handleDownloadResume} className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
                <Download size={20} />
                Download Resume
              </button>
              <button onClick={scrollToContact} className="flex items-center gap-2 border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105">
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQGXcKINXkjygA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709632703186?e=1762387200&v=beta&t=rSRowQyK0fMEra1_pp01CWevQpHJzrPvj_stZD62X0k" alt="Dev Bikaneria" className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
