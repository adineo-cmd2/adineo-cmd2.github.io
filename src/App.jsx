// src/App.jsx — single-column minimal layout
import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Currently from './components/Currently';
import Widgets from './components/Widgets';
import ProjectsList from './components/ProjectsList';
import SearchBar from './components/SearchBar';
import EducationCertifications from './components/EducationCertifications';
import TechStack from './components/TechStack';
import SiteFooter from './components/SiteFooter';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  // Ctrl/Cmd + K opens the command palette from anywhere
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[680px] px-6">
      <Header />
      <Currently />
      <Widgets />
      <ProjectsList />
      <div className="py-4">
        <SearchBar onOpen={openPalette} theme={theme} onToggleTheme={toggleTheme} />
      </div>
      <EducationCertifications />
      <TechStack />
      <SiteFooter />
      {paletteOpen && (
        <CommandPalette
          open
          onClose={closePalette}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}
