import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

const API_URL =
  'https://script.google.com/macros/s/AKfycbxEwkmu1xdypPEGGM5AieTU-VCvesW41C5XcBYRF2o2ibZtWry3N0W4Hx930-cuhRt3kA/exec';

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tools:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  // ✅ Loading UI
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading tools...</p>
        </div>
      </section>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-900">
        <p className="text-red-400">Failed to load tools. Please try again.</p>
      </section>
    );
  }

  return (
    <section
      id="tools"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Development tools I use daily</p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden w-[45%] sm:w-[30%] md:w-[22%] bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 flex flex-col items-center justify-center group"
            >
              {/* 🔥 Hover Gradient Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-700 shadow-[0_0_12px_#06b6d4]"></div>
              </div>

              {/* Icon */}
              {tool.icon ? (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <Code className="w-12 h-12 text-gray-400 mb-4" />
              )}

              {/* Name */}
              <h3 className="text-white font-semibold text-center">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
