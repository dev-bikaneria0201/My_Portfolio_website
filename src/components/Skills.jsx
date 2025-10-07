import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and languages I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
