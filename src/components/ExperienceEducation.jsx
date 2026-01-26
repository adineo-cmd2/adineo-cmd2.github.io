// components/ExperienceEducation.jsx
import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { certifications, education } from '../data/content';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('certifications');

  return (
    <section id="experience-education" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-12 mb-12 border-b border-zinc-800">
          <button
            onClick={() => setActiveTab('certifications')}
            className={`pb-4 text-xl font-medium transition-colors relative ${
              activeTab === 'certifications'
                ? 'text-zinc-100'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Certifications
            {activeTab === 'certifications' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`pb-4 text-xl font-medium transition-colors relative ${
              activeTab === 'education'
                ? 'text-zinc-100'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Education
            {activeTab === 'education' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100"></span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === 'certifications' ? (
            // Certifications Cards
            certifications?.length > 0 ? (
              certifications.map((cert, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-zinc-800">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white -translate-x-[7px]"></div>
                  <div className="pb-8">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-zinc-100">{cert.title}</h3>
                      <span className="text-sm text-zinc-500 flex items-center gap-1">
                        <Calendar size={14} />
                        {cert.period}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-base mb-4">{cert.issuer}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 italic">No certifications listed.</p>
            )
          ) : (
            // Education Cards — now with institution
            education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-zinc-800">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white -translate-x-[7px]"></div>
                <div className="pb-8">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-zinc-100">{edu.degree}</h3>
                    <span className="text-sm text-zinc-500 flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                  {/* Institution */}
                  <p className="text-zinc-400 text-base mb-2">{edu.institution}</p>
                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-zinc-500 text-sm flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </p>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}