// src/App.jsx - Main application with routing
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeSection, setActiveSection] = useState('home');

  // Unified navigation handler — only supports 'home' now
  const navigateToPage = (page) => {
    if (page === 'home') {
      setCurrentPage('home');
      window.scrollTo(0, 0);
      window.history.pushState({}, '', '/');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll detection for home page sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience-education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle browser back/forward — always go to home
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setCurrentPage('home');
      } else {
        // Redirect any non-root path back to home
        window.history.replaceState({}, '', '/');
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Only render the home page
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-400" style={{ fontFamily: 'monospace' }}>
      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      <Hero onNavigate={scrollToSection} />
      <About />
      <ExperienceEducation />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}