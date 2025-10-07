// import React from 'react';
// import { Briefcase } from 'lucide-react';
// import { experienceData } from '../data/experienceData';

// const Experience = () => {
//   return (
//     <section id="experience" className="min-h-screen bg-slate-800 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
//           </h2>
//           <p className="text-gray-400 text-lg">My professional journey</p>
//         </div>

//         <div className="relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block"></div>

//           {experienceData.map((exp, idx) => (
//             <div key={exp.id} className={`mb-12 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//               <div className="w-full md:w-5/12"></div>

//               <div className="relative flex items-center justify-center w-12 h-12 my-4 md:my-0">
//                 <div className="absolute w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center z-10">
//                   <Briefcase className="text-white" size={24} />
//                 </div>
//               </div>

//               <div className="w-full md:w-5/12">
//                 <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
//                   <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
//                   <h4 className="text-cyan-400 text-xl mb-2">{exp.company}</h4>
//                   <p className="text-gray-400 mb-4">{exp.period}</p>
//                   <ul className="space-y-2">
//                     {exp.description.map((item, i) => (
//                       <li key={i} className="text-gray-300 flex items-start">
//                         <span className="text-cyan-400 mr-2">•</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React, { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycby7XG2nn90efQyFcyim9XhQOYYEcKJcLU7nlVPgxioAwusBFY5HlvdPdLy3YSDaUvqxaw/exec"
    ) // 👈 Replace with your Apps Script deployed URL
      .then((res) => res.json())
      .then((data) => setExperienceData(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <section id="experience" className="min-h-screen bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block"></div>

          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Spacer for alignment */}
              <div className="w-full md:w-5/12"></div>

              {/* Center Icon */}
              <div className="relative flex items-center justify-center w-12 h-12 my-4 md:my-0">
                <div className="absolute w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center z-10">
                  <Briefcase className="text-white" size={24} />
                </div>
              </div>

              {/* Content Box */}
              <div className="w-full md:w-5/12">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-cyan-400 text-xl mb-2">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description?.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-300 flex items-start leading-relaxed"
                      >
                        <span className="text-cyan-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
