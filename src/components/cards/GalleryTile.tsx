import { FiCamera, FiUsers, FiFileText, FiAward, FiMapPin, FiCpu } from 'react-icons/fi';
import type { GalleryImage } from '@/data/gallery';
import Reveal from '../ui/Reveal';
import { asset } from '@/lib/paths';

const categoryIcon = {
  Laboratory: FiCpu,
  Conference: FiUsers,
  Posters: FiFileText,
  Awards: FiAward,
  'Field Visits': FiMapPin,
  Instrumentation: FiCamera,
} as const;

const aspectClass = {
  square: 'aspect-square',
  tall: 'aspect-[3/4]',
  wide: 'aspect-[4/3] sm:col-span-2',
} as const;

/**
 * Renders the real photo if `image` resolves, otherwise an elegant
 * category-tinted placeholder tile (icon + caption) so the masonry grid
 * never shows a broken-image icon before real photography is added.
 */
export default function GalleryTile({ item, index = 0 }: { item: GalleryImage; index?: number }) {
  const Icon = categoryIcon[item.category];

  return (
    <Reveal delay={Math.min(index * 0.04, 0.3)} className={`group relative overflow-hidden rounded-md ${aspectClass[item.aspect]}`}>
      {item.image ? (
        <img src={asset(item.image)} alt={item.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-700 to-emerald-700 text-white/80 p-4 text-center hex-bg">
          <Icon size={26} aria-hidden="true" />
          <span className="text-xs font-mono uppercase tracking-wider text-white/60">{item.category}</span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/85 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs text-white leading-snug">{item.caption}</p>
      </div>
    </Reveal>
  );
}
