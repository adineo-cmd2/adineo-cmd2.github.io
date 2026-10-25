import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { aboutText, personalInfo } from '../data/content';

export default function Currently() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="currently" className="border-t border-line py-7">
      <p className="section-label">currently</p>
      <p className="mt-3 max-w-[560px] text-[13.5px] leading-[1.75] text-muted">
        {aboutText}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <a href={`mailto:${personalInfo.email}`} className="link">
          {personalInfo.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
          className="inline-flex items-center text-faint transition-colors hover:text-accent"
        >
          {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
        </button>
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="link inline-flex items-center gap-0.5"
        >
          résumé
          <ArrowUpRight size={11} />
        </a>
      </div>
    </section>
  );
}
