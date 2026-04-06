// import React from 'react';
// import { skillsData } from '../data/skillsData';

// const Skills = () => {
//   return (
//     <section id="skills" className="min-h-screen bg-slate-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
//           </h2>
//           <p className="text-gray-400 text-lg">Technologies and languages I work with</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {skillsData.map((category, idx) => (
//             <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
//               <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">{category.category}</h3>
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIdx) => (
//                   <div key={skillIdx}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-300 font-medium">{skill.name}</span>
//                       <span className="text-cyan-400">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-slate-700 rounded-full h-2.5">
//                       <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React, { useEffect, useState } from 'react';

// const Skills = () => {
//   const [skillsData, setSkillsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await fetch(
//           'https://script.google.com/macros/s/AKfycbyJmokwPnxo_Ou75-K2iGQ7tOkbs-jpvJupLJt8CMQwr6xNTQFpGFCqnvw8vP4wTL0wAA/exec',
//         );
//         const data = await res.json();

//         console.log('API Response:', data);

//         // ✅ Directly use skillsData from API
//         setSkillsData(data.skillsData);
//       } catch (error) {
//         console.error('Error fetching skills:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   return (
//     <section id="skills" className="min-h-screen bg-slate-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             My{' '}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Skills
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg">
//             Technologies and languages I work with
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {loading ? (
//             <p className="text-gray-400 text-center col-span-3">
//               Loading skills...
//             </p>
//           ) : skillsData?.length > 0 ? (
//             skillsData.map((category, idx) => (
//               <div
//                 key={idx}
//                 className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
//               >
//                 <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
//                   {category.category}
//                 </h3>

//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIdx) => (
//                     <div key={skillIdx}>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-300 font-medium">
//                           {skill.name}
//                         </span>
//                         <span className="text-cyan-400">{skill.level}%</span>
//                       </div>

//                       <div className="w-full bg-slate-700 rounded-full h-2.5">
//                         <div
//                           className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-red-400 text-center col-span-3">
//               No skills data found.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React, { useEffect, useState } from 'react';

// const Skills = () => {
//   const [skillsData, setSkillsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await fetch(
//           'https://script.google.com/macros/s/AKfycbyJmokwPnxo_Ou75-K2iGQ7tOkbs-jpvJupLJt8CMQwr6xNTQFpGFCqnvw8vP4wTL0wAA/exec',
//         );
//         const data = await res.json();
//         setSkillsData(data.skillsData);
//       } catch (error) {
//         console.error('Error fetching skills:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   // ✅ Extract categories dynamically
//   const categories = ['All', ...skillsData.map((cat) => cat.category)];

//   // ✅ Filter data based on selected category
//   const filteredData =
//     selectedCategory === 'All'
//       ? skillsData
//       : skillsData.filter((cat) => cat.category === selectedCategory);

//   return (
//     <section id="skills" className="min-h-screen bg-slate-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             My{' '}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Skills
//             </span>
//           </h2>
//         </div>

//         {/* ✅ Category Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-5 py-2 rounded-full border transition-all duration-300
//                 ${
//                   selectedCategory === cat
//                     ? 'bg-cyan-500 text-white border-cyan-500'
//                     : 'text-gray-300 border-slate-600 hover:border-cyan-400'
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {loading ? (
//             <p className="text-gray-400 text-center col-span-3">
//               Loading skills...
//             </p>
//           ) : filteredData?.length > 0 ? (
//             filteredData.map((category, idx) => (
//               <div
//                 key={idx}
//                 className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
//                   {category.category}
//                 </h3>

//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIdx) => (
//                     <div key={skillIdx}>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-300 font-medium">
//                           {skill.name}
//                         </span>
//                         <span className="text-cyan-400">{skill.level}%</span>
//                       </div>

//                       <div className="w-full bg-slate-700 rounded-full h-2.5">
//                         <div
//                           className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-red-400 text-center col-span-3">
//               No skills data found.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React, { useEffect, useState } from 'react';

// const Skills = () => {
//   const [skillsData, setSkillsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await fetch(
//           'https://script.google.com/macros/s/AKfycbyJmokwPnxo_Ou75-K2iGQ7tOkbs-jpvJupLJt8CMQwr6xNTQFpGFCqnvw8vP4wTL0wAA/exec'
//         );
//         const data = await res.json();
//         setSkillsData(data.skillsData);
//       } catch (error) {
//         console.error('Error fetching skills:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   // Extract categories dynamically
//   const categories = ['All', ...skillsData.map((cat) => cat.category)];

//   // Filter data based on selected category
//   const filteredData =
//     selectedCategory === 'All'
//       ? skillsData
//       : skillsData.filter((cat) => cat.category === selectedCategory);

//   return (
//     <section id="skills" className="min-h-screen bg-slate-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             My{' '}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Skills
//             </span>
//           </h2>
//         </div>

//         {/* Category Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-5 py-2 rounded-full border transition-all duration-300
//                 ${
//                   selectedCategory === cat
//                     ? 'bg-cyan-500 text-white border-cyan-500'
//                     : 'text-gray-300 border-slate-600 hover:border-cyan-400'
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-3 gap-8 justify-items-center">
//           {loading ? (
//             <p className="text-gray-400 text-center col-span-3">
//               Loading skills...
//             </p>
//           ) : filteredData?.length > 0 ? (
//             filteredData.map((category, idx) => (
//               <div
//                 key={idx}
//                 className="w-full max-w-sm bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
//                   {category.category}
//                 </h3>

//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIdx) => (
//                     <div key={skillIdx}>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-300 font-medium">
//                           {skill.name}
//                         </span>
//                         <span className="text-cyan-400">{skill.level}%</span>
//                       </div>

//                       <div className="w-full bg-slate-700 rounded-full h-2.5">
//                         <div
//                           className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-red-400 text-center col-span-3">
//               No skills data found.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React, { useEffect, useState } from 'react';

// const Skills = () => {
//   const [skillsData, setSkillsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await fetch(
//           'https://script.google.com/macros/s/AKfycbyJmokwPnxo_Ou75-K2iGQ7tOkbs-jpvJupLJt8CMQwr6xNTQFpGFCqnvw8vP4wTL0wAA/exec',
//         );
//         const data = await res.json();
//         setSkillsData(data.skillsData);
//       } catch (error) {
//         console.error('Error fetching skills:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   const categories = ['All', ...skillsData.map((cat) => cat.category)];

//   const filteredData =
//     selectedCategory === 'All'
//       ? skillsData
//       : skillsData.filter((cat) => cat.category === selectedCategory);

//   return (
//     <section id="skills" className="min-h-screen bg-slate-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             My{' '}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Skills
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg">
//             Technologies and languages I work with
//           </p>
//         </div>

//         {/* Category Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-5 py-2 rounded-full border transition-all duration-300
//                 ${
//                   selectedCategory === cat
//                     ? 'bg-cyan-500 text-white border-cyan-500'
//                     : 'text-gray-300 border-slate-600 hover:border-cyan-400'
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Skills Flex Container */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {loading ? (
//             <p className="text-gray-400 text-center w-full">
//               Loading skills...
//             </p>
//           ) : filteredData?.length > 0 ? (
//             filteredData.map((category, idx) => (
//               <div
//                 key={idx}
//                 className="w-full max-w-sm bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
//               >
//                 {/* Show heading only when 'All' is selected */}
//                 {selectedCategory === 'All' && (
//                   <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
//                     {category.category}
//                   </h3>
//                 )}

//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIdx) => (
//                     <div key={skillIdx}>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-300 font-medium">
//                           {skill.name}
//                         </span>
//                         <span className="text-cyan-400">{skill.level}%</span>
//                       </div>

//                       <div className="w-full bg-slate-700 rounded-full h-2.5">
//                         <div
//                           className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-red-400 text-center w-full">
//               No skills data found.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Skills');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbxiDdf4cL7LA4xSPu8Tb9vKnSxT5CG1gW3nYVDGdkRrW7yhqck0CkXb9012pxgH2tmRhQ/exec',
        );
        const data = await res.json();
        setSkillsData(data.skillsData);
        console.log('Fetched skills data:', data.skillsData);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const categories = ['All Skills', ...skillsData.map((cat) => cat.category)];

  const filteredData =
    selectedCategory === 'All Skills'
      ? skillsData
      : skillsData.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border transition-all duration-300
                ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-white border-cyan-500'
                    : 'text-gray-300 border-slate-600 hover:border-cyan-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-gray-400 text-center">Loading skills...</p>
        ) : filteredData?.length > 0 ? (
          filteredData.map((category, idx) => (
            <div key={idx} className="mb-20 flex flex-col items-center">
              {/* ROOT NODE */}
              <div className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg">
                {category.category}
              </div>

              {/* Vertical Line */}
              <div className="w-1 h-10 bg-cyan-500"></div>

              {/* Tree Container */}
              <div className="relative w-full flex justify-center">
                {/* Horizontal Line */}
                <div className="absolute top-0 left-1/2 w-[80%] h-0.5 bg-cyan-500 transform -translate-x-1/2"></div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-10 mt-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col items-center">
                      {/* Vertical connector */}
                      <div className="w-0.5 h-6 bg-cyan-500"></div>

                      {/* Skill Card */}
                      <div
                        className="bg-slate-800/60 backdrop-blur-md rounded-xl p-5 border border-slate-700 w-44 text-center 
                        hover:border-cyan-400 hover:scale-105 hover:shadow-cyan-500/30 
                        transition-all duration-300 shadow-lg"
                      >
                        {/* ICON */}
                        <div className="flex justify-center mb-3">
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-12 h-12 object-contain bg-slate-700 p-2 rounded-full"
                          />
                        </div>

                        {/* NAME */}
                        <div className="text-gray-200 font-semibold text-sm mb-1">
                          {skill.name}
                        </div>

                        {/* LEVEL */}
                        <div className="text-cyan-400 font-bold text-sm mb-3">
                          {skill.level}%
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-400 text-center">No skills data found.</p>
        )}
      </div>
    </section>
  );
};

export default Skills;
