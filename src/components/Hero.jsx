// components/Hero.jsx
import React from 'react';
import { ExternalLink, Download, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-zinc-100">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-zinc-400 mb-4">{personalInfo.title}</p>
        
        {/* Email and Location */}
        <div className="flex items-center justify-center gap-6 mb-8 text-zinc-500 text-sm">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
          >
            <Mail size={16} />
            {personalInfo.email}
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {personalInfo.location}
          </div>
        </div>

        <p className="text-base text-zinc-500 mb-8 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-sm transition-colors flex items-center gap-2"
          >
            Get in touch
            <ExternalLink size={14} />
          </button>
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded text-sm transition-colors"
          >
            View GitHub
          </a>
          <a 
            href={personalInfo.resumeUrl}
            download
            className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded text-sm transition-colors flex items-center gap-2"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}