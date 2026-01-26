// components/About.jsx
import React from 'react';
import { aboutText, skills, personalInfo } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-zinc-200">About</h2>
        
        <p className="text-zinc-400 text-base mb-12 leading-relaxed">
          {aboutText}
        </p>

        {/* Skills */}
        <h3 className="text-xl font-semibold mb-6 text-zinc-300">Skills</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-zinc-900 border border-zinc-800 rounded p-6">
              <h4 className="text-base font-semibold mb-4 text-zinc-300">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}