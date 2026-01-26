// components/Navigation.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Navigation({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Updated nav items: removed 'Explore', restored standard sections
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  const handleClick = (item) => {
    // Map nav item to section ID
    // "Experience" maps to 'experience-education' to match section ID
    let sectionId = item.toLowerCase();
    if (item === 'Experience') {
      sectionId = 'experience-education';
    }
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
        >
          {personalInfo.username}
        </a>
        
        <button 
          className="md:hidden text-zinc-400 hover:text-zinc-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`capitalize transition-all relative ${
                activeSection === (item === 'Experience' ? 'experience-education' : item.toLowerCase()) 
                  ? 'text-zinc-100' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {item}
              {activeSection === (item === 'Experience' ? 'experience-education' : item.toLowerCase()) && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-[1px] bg-zinc-100" />
              )}
            </button>
          ))}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`block w-full text-left px-6 py-3 capitalize text-sm transition-colors ${
                activeSection === (item === 'Experience' ? 'experience-education' : item.toLowerCase())
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}