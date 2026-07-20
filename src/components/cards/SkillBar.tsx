import Reveal from '../ui/Reveal';

export default function SkillBar({ name, level, index = 0 }: { name: string; level: number; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)}>
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span className="text-navy-700 dark:text-navy-50 font-medium">{name}</span>
        <span className="font-mono text-xs text-ink-muted dark:text-navy-300">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-navy-800/8 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
          style={{ width: `${level}%` }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={name}
        />
      </div>
    </Reveal>
  );
}
