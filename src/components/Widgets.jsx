import { useEffect, useState } from 'react';
import { personalInfo } from '../data/content';

// Analog clock face driven by IST (Asia/Kolkata) regardless of viewer timezone
function AnalogClock({ hour, minute, second }) {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill="none" stroke="var(--line)" strokeWidth="1" />
      <line x1="22" y1="2.5" x2="22" y2="6.5" stroke="var(--text-faint)" strokeWidth="1" />
      <line x1="22" y1="37.5" x2="22" y2="41.5" stroke="var(--text-faint)" strokeWidth="1" />
      <line x1="2.5" y1="22" x2="6.5" y2="22" stroke="var(--text-faint)" strokeWidth="1" />
      <line x1="37.5" y1="22" x2="41.5" y2="22" stroke="var(--text-faint)" strokeWidth="1" />
      <line
        x1="22" y1="22" x2="22" y2="13"
        stroke="var(--text-soft)" strokeWidth="1.8" strokeLinecap="round"
        transform={`rotate(${(hour % 12) * 30 + minute * 0.5} 22 22)`}
      />
      <line
        x1="22" y1="22" x2="22" y2="9"
        stroke="var(--text-soft)" strokeWidth="1.2" strokeLinecap="round"
        transform={`rotate(${minute * 6 + second * 0.1} 22 22)`}
      />
      <line
        x1="22" y1="24" x2="22" y2="8"
        stroke="var(--accent)" strokeWidth="0.8" strokeLinecap="round"
        transform={`rotate(${second * 6} 22 22)`}
      />
      <circle cx="22" cy="22" r="1.4" fill="var(--accent)" />
    </svg>
  );
}

function useIST() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: personalInfo.timezone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(now);

  const get = (type) => parseInt(parts.find((p) => p.type === type)?.value ?? '0', 10);

  return {
    hour: get('hour'),
    minute: get('minute'),
    second: get('second'),
    label: `${String(get('hour')).padStart(2, '0')}:${String(get('minute')).padStart(2, '0')} IST`,
  };
}

const cardClass =
  'flex h-[118px] flex-col justify-between rounded-xl border border-line bg-card px-4 py-3.5 transition-colors hover:border-faint';

export default function Widgets() {
  const clock = useIST();

  return (
    <section aria-label="Status widgets" className="grid grid-cols-3 gap-2.5 pb-7 sm:gap-3">
      <div className={cardClass}>
        <p className="widget-label">local time</p>
        <div className="flex flex-col items-center gap-1.5">
          <AnalogClock hour={clock.hour} minute={clock.minute} second={clock.second} />
          <p className="text-[10.5px] tabular-nums text-faint">{clock.label}</p>
        </div>
      </div>

      <div className={cardClass}>
        <p className="widget-label">status</p>
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <p className="text-[12.5px] font-medium text-soft">{personalInfo.status}</p>
        </div>
        <p className="text-[10.5px] text-faint">
          {personalInfo.statusDetail} · {personalInfo.location}
        </p>
      </div>

      <div className={cardClass}>
        <p className="widget-label">monogram</p>
        <p className="text-center text-[26px] font-semibold leading-none tracking-tight text-soft">
          {personalInfo.monogram}
          <span className="text-accent">.</span>
        </p>
        <p className="text-[10.5px] text-faint">
          © {personalInfo.name.split(' ')[0].toLowerCase()} {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
