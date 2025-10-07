import React from 'react';
import { Figma, Send, Database, GitBranch, Box, Code, Smartphone, Github } from 'lucide-react';
import { toolsData } from '../data/skillsData';

const iconMap = {
  Figma: Figma,
  Send: Send,
  Database: Database,
  GitBranch: GitBranch,
  Box: Box,
  Code: Code,
  Smartphone: Smartphone,
  Github: Github
};

const Tools = () => {
  return (
    <section id="tools" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg">Development tools I use daily</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {toolsData.map((tool, idx) => {
            const Icon = iconMap[tool.icon];
            return (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 flex flex-col items-center justify-center group">
                <Icon className="w-12 h-12 text-gray-400 group-hover:text-cyan-400 transition-colors mb-4" />
                <h3 className="text-white font-semibold text-center">{tool.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
