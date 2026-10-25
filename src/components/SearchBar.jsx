import { Moon, Search, Sun } from 'lucide-react';

export default function SearchBar({ onOpen, theme, onToggleTheme }) {
  return (
    <div className="mx-auto flex w-full max-w-[380px] items-center gap-2">
      <button
        type="button"
        onClick={onOpen}
        className="flex flex-1 items-center justify-between gap-3 rounded-full border border-line bg-card px-4 py-2.5 text-[12.5px] text-faint transition-colors hover:border-faint"
      >
        <span className="flex items-center gap-2">
          <Search size={13} />
          Ask me anything
        </span>
        <span className="flex items-center gap-1">
          <kbd className="kbd">Ctrl</kbd>
          <kbd className="kbd">K</kbd>
        </span>
      </button>

      <button
        type="button"
        onClick={onToggleTheme}
        aria-label="Toggle color theme"
        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-line bg-card text-faint transition-colors hover:border-faint hover:text-accent"
      >
        {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
      </button>
    </div>
  );
}
