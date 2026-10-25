import { certifications, education } from '../data/content';

function Row({ title, sub, meta }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-[13px]">
      <div className="min-w-0">
        <h3 className="text-[13.5px] font-medium text-soft">{title}</h3>
        <p className="mt-0.5 text-[12px] text-faint">{sub}</p>
      </div>
      <p className="whitespace-nowrap text-[12px] text-faint">{meta}</p>
    </div>
  );
}

export default function EducationCertifications() {
  return (
    <>
      <section id="education" className="border-t border-line py-7">
        <p className="section-label">education</p>
        <div className="divide-y divide-line/70">
          {education.map((item) => (
            <Row
              key={item.degree}
              title={item.degree}
              sub={`${item.institution} · ${item.description}`}
              meta={item.period}
            />
          ))}
        </div>
      </section>

      <section id="certifications" className="border-t border-line py-7">
        <p className="section-label">certifications</p>
        <div className="divide-y divide-line/70">
          {certifications.map((item) => (
            <Row
              key={item.title}
              title={item.title}
              sub={item.issuer}
              meta={item.period}
            />
          ))}
        </div>
      </section>
    </>
  );
}
