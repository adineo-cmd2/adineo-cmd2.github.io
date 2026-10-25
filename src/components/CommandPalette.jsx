import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Copy,
  CornerDownLeft,
  FileText,
  Folder,
  Github,
  GraduationCap,
  Hash,
  Layers,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  Sun,
} from 'lucide-react';
import { personalInfo } from '../data/content';

const GROUPS = ['links', 'sections', 'actions'];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function CommandPalette({ open, onClose, theme, onToggleTheme }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => {
    const base = [
      {
        group: 'links',
        icon: Github,
        label: 'GitHub',
        hint: personalInfo.github.replace('https://', ''),
        keywords: 'code repos open source',
        action: () => window.open(personalInfo.github, '_blank'),
      },
      {
        group: 'links',
        icon: Linkedin,
        label: 'LinkedIn',
        hint: 'in/aditya-yadav-cmd',
        keywords: 'profile connect network',
        action: () => window.open(personalInfo.linkedin, '_blank'),
      },
      {
        group: 'links',
        icon: Mail,
        label: 'Email me',
        hint: personalInfo.email,
        keywords: 'contact message say hi',
        action: () => {
          window.location.href = `mailto:${personalInfo.email}`;
        },
      },
      {
        group: 'links',
        icon: FileText,
        label: 'Résumé',
        hint: 'PDF',
        keywords: 'cv resume download',
        action: () => window.open(personalInfo.resumeUrl, '_blank'),
      },
      {
        group: 'sections',
        icon: Sparkles,
        label: 'Currently',
        hint: 'what I am up to',
        action: () => scrollToId('currently'),
      },
      {
        group: 'sections',
        icon: Folder,
        label: 'Projects',
        hint: 'things I have built',
        action: () => scrollToId('projects'),
      },
      {
        group: 'sections',
        icon: GraduationCap,
        label: 'Education & Certifications',
        hint: 'where I have studied',
        action: () => scrollToId('education'),
      },
      {
        group: 'sections',
        icon: Layers,
        label: 'Tech Stack',
        hint: 'what I work with',
        action: () => scrollToId('tech-stack'),
      },
      {
        group: 'actions',
        icon: Copy,
        label: 'Copy email address',
        hint: personalInfo.email,
        keywords: 'clipboard paste',
        action: () => navigator.clipboard?.writeText(personalInfo.email),
      },
      {
        group: 'actions',
        icon: theme === 'dark' ? Sun : Moon,
        label: 'Toggle theme',
        hint: theme === 'dark' ? 'switch to light' : 'switch to dark',
        keywords: 'appearance color mode contrast',
        action: onToggleTheme,
      },
    ];
    return base;
  }, [theme, onToggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) =>
      `${item.label} ${item.hint ?? ''} ${item.keywords ?? ''} ${item.group}`
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  // Focus the input on mount; the palette is mounted fresh each time it opens
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  const run = (item) => {
    item.action();
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (filtered.length ? (a + 1) % filtered.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (filtered.length ? (a - 1 + filtered.length) % filtered.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[active];
      if (item) run(item);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/55 px-4 pt-[16vh] backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Ask me anything"
    >
      <div
        className="animate-fade-up w-full max-w-[460px] overflow-hidden rounded-xl border border-line bg-card shadow-2xl shadow-black/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 border-b border-line px-4">
          <Hash size={14} className="shrink-0 text-faint" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            className="w-full bg-transparent py-3.5 text-[13px] text-soft outline-none placeholder:text-faint"
          />
        </div>

        <div className="max-h-[300px] overflow-y-auto p-1.5">
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-center text-[12.5px] text-faint">No results found.</p>
          )}

          {GROUPS.map((group) => {
            const groupItems = filtered.filter((item) => item.group === group);
            if (groupItems.length === 0) return null;
            return (
              <div key={group} className="mb-1 last:mb-0">
                <p className="px-3 pb-1 pt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-faint">
                  {group}
                </p>
                {groupItems.map((item) => {
                  const index = filtered.indexOf(item);
                  const isActive = index === active;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onClick={() => run(item)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                        isActive ? 'bg-cardhover text-soft' : 'text-muted'
                      }`}
                    >
                      <Icon size={14} className={isActive ? 'text-accent' : 'text-faint'} />
                      <span>{item.label}</span>
                      <span className="ml-auto flex items-center gap-2">
                        {item.hint && (
                          <span className="max-w-[160px] truncate text-[11px] text-faint">
                            {item.hint}
                          </span>
                        )}
                        {isActive && <CornerDownLeft size={11} className="text-faint" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 border-t border-line px-4 py-2 text-[10.5px] text-faint">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
