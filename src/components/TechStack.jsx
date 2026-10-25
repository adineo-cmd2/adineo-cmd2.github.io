import { skills } from '../data/content';

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-t border-line py-7">
      <p className="section-label">tech stack</p>
      <div className="mt-2">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={category}
            className={`flex gap-5 py-2.5 ${index > 0 ? 'border-t border-line/60' : ''}`}
          >
            <span className="w-[104px] shrink-0 text-[12.5px] text-faint">
              {category}
            </span>
            <p className="text-[12.5px] leading-relaxed text-muted">{items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
