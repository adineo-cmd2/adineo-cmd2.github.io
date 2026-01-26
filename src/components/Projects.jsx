// components/Projects.jsx
import React from 'react';
import { Github, Globe } from 'lucide-react';
import { projects } from '../data/content';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  const getPrimaryUrl = (project) => {
    return project.githubUrl || project.liveUrl || null;
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-zinc-200">Selected Work</h2>
        <p className="text-zinc-500 text-sm mb-10">
          A collection of projects showcasing expertise in AI/ML, and full-stack development.
        </p>
        
        <div className="space-y-6">
          {featuredProjects.map((project, idx) => {
            const primaryUrl = getPrimaryUrl(project);
            return (
              <div 
                key={project.githubUrl || project.liveUrl || idx}
                className="bg-zinc-900 border border-zinc-800 rounded p-6 hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-start gap-2 mb-3">
                  {primaryUrl ? (
                    <a
                      href={primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-zinc-200 group-hover:text-zinc-100 hover:underline inline-flex items-start"
                      aria-label={`View ${project.title} on GitHub or live site`}
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="text-base font-semibold text-zinc-200">
                      {project.title}
                    </h3>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center p-1 rounded hover:bg-zinc-800 hover:scale-110 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github 
                        size={20} 
                        className="text-zinc-500 hover:text-zinc-300 opacity-80 hover:opacity-100" 
                      />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center p-1 rounded hover:bg-zinc-800 hover:scale-110 transition-all"
                      aria-label={`Visit live site for ${project.title}`}
                    >
                      <Globe 
                        size={20} 
                        className="text-zinc-500 hover:text-zinc-300 opacity-80 hover:opacity-100" 
                      />
                    </a>
                  )}
                </div>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-zinc-800 text-zinc-500 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}