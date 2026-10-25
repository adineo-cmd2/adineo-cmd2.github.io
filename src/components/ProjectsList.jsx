import { ArrowUpRight } from 'lucide-react';
import { personalInfo, projects } from '../data/content';

export default function ProjectsList() {
  return (
    <section id="projects" className="border-t border-line py-7">
      <p className="section-label">projects</p>

      <div className="divide-y divide-line">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group block py-4"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[14px] font-medium text-soft transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <span className="pill">{project.categories[0]}</span>
            </div>
            <p className="mt-1.5 max-w-[520px] text-[13px] leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mt-2 text-[11.5px] text-faint">{project.tags.join(' · ')}</p>
          </a>
        ))}
      </div>

      <a
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
        className="link mt-1 inline-flex items-center gap-0.5"
      >
        more
        <ArrowUpRight size={11} />
      </a>
    </section>
  );
}
