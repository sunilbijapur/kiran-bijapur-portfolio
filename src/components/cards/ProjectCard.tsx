import type { Project } from '@/data/projects';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';
import { FiUsers } from 'react-icons/fi';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="card p-6">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge tone={project.status === 'Ongoing' ? 'emerald' : 'navy'}>{project.status}</Badge>
        <Badge tone="gold">{project.role}</Badge>
      </div>
      <h3 className="text-lg font-display font-medium text-navy-800 dark:text-white leading-snug">{project.title}</h3>
      <p className="mt-2 text-sm text-ink-light dark:text-navy-200">{project.fundingAgency}</p>
      <p className="text-xs font-mono text-ink-muted dark:text-navy-300">{project.duration}</p>
      <p className="mt-3 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{project.description}</p>
      {project.collaborators && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-muted dark:text-navy-300">
          <FiUsers aria-hidden="true" /> {project.collaborators}
        </p>
      )}
    </Reveal>
  );
}
