// import React from 'react';
// import { Github, ExternalLink } from 'lucide-react';
// import { projects } from '../data/projectsData';

// const Projects = () => {
//   return (
//     <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <p className="text-gray-400 text-lg">Some of my recent work</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <div key={project.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group">
//               <div className="relative overflow-hidden">
//                 <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
//                 <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
//                     <Github size={20} />
//                     <span>Code</span>
//                   </a>
//                   <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
//                     <ExternalLink size={20} />
//                     <span>Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxCYcZVw0lf-KETHd0rjNj3qCvdoi3D3xzcVKnfoZ3fpuGkuV2e5tab8R0xIBQJxnKwaw/exec") // 👈 Replace with your deployed Apps Script URL
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error loading projects:", err));
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
