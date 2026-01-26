import React from 'react';
import { Mail, Linkedin, Github, Code } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-zinc-200">Get in Touch</h2>
        <p className="text-zinc-400 text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          Currently seeking full-time opportunities to leverage my skills in Full-Stack development and AI/ML engineering. Let's connect!
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 transition-all text-left"
          >
            <Mail className="text-zinc-500" size={20} />
            <div>
              <p className="text-xs text-zinc-500 mb-1">Email</p>
              <p className="text-sm text-zinc-300">{personalInfo.email}</p>
            </div>
          </a>
          
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 transition-all text-left"
          >
            <Linkedin className="text-zinc-500" size={20} />
            <div>
              <p className="text-xs text-zinc-500 mb-1">LinkedIn</p>
              <p className="text-sm text-zinc-300">aditya-yadav-cmd</p>
            </div>
          </a>
          
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 transition-all text-left"
          >
            <Github className="text-zinc-500" size={20} />
            <div>
              <p className="text-xs text-zinc-500 mb-1">GitHub</p>
              <p className="text-sm text-zinc-300">adineo-cmd</p>
            </div>
          </a>
          
          <a 
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 transition-all text-left"
          >
            <Code className="text-zinc-500" size={20} />
            <div>
              <p className="text-xs text-zinc-500 mb-1">LeetCode</p>
              <p className="text-sm text-zinc-300">adineo-cmd</p>
            </div>
          </a>
        </div>

        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-sm transition-colors"
        >
          Send a message
        </a>
      </div>
    </section>
  );
}
