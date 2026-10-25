import { ArrowUpRight } from 'lucide-react';
import { personalInfo, quote } from '../data/content';

const links = [
  { label: 'github', href: personalInfo.github, external: true },
  { label: 'linkedin', href: personalInfo.linkedin, external: true },
  { label: 'email', href: `mailto:${personalInfo.email}`, external: false },
  { label: 'résumé', href: personalInfo.resumeUrl, external: true },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-8">
      <p className="text-center text-[12px] italic text-faint">
        “{quote.text}” — {quote.author}
      </p>

      <nav className="mt-5 flex items-center justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="inline-flex items-center gap-0.5 text-[12px] text-faint transition-colors hover:text-accent"
          >
            {link.label}
            {link.external && <ArrowUpRight size={10} />}
          </a>
        ))}
      </nav>

      <p className="mt-6 text-center text-[11px] text-faint/70">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
