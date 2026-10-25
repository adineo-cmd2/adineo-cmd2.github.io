import { personalInfo } from '../data/content';

export default function Header() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0 pb-7 pt-14">
      <h1 className="text-[17px] font-medium tracking-[-0.01em] text-soft">
        {personalInfo.name}
      </h1>
      <p className="text-[12.5px] text-faint">{personalInfo.title}</p>
    </header>
  );
}
