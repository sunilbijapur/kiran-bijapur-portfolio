import { useEffect, useRef, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { navigation, isNavGroup } from '@/data/navigation';
import { site } from '@/data/profile';
import ThemeToggle from './ThemeToggle';

function DesktopDropdown({ label, path, children }: { label: string; path?: string; children: { label: string; path: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy-700 dark:text-navy-50 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
      >
        {path ? (
          <Link to={path} onClick={(e) => e.stopPropagation()}>
            {label}
          </Link>
        ) : (
          <span>{label}</span>
        )}
        <FiChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} size={14} aria-hidden="true" />
      </button>
      <div
        className={`absolute left-0 top-full mt-1 min-w-[240px] rounded-md border border-navy-800/10 dark:border-white/10 bg-white dark:bg-navy-700 shadow-glass-lg py-2 transition-all duration-150 origin-top ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {children.map((child) => (
          <Link
            key={child.path}
            to={child.path}
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-navy-700 dark:text-navy-50 hover:bg-emerald-50 dark:hover:bg-white/5 hover:text-emerald-700 dark:hover:text-emerald-300"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-medium text-navy-800 dark:text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white font-mono text-sm">KB</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((entry) =>
            isNavGroup(entry) ? (
              <DesktopDropdown key={entry.label} label={entry.label} path={entry.path} children={entry.children} />
            ) : (
              <RouterNavLink
                key={entry.path}
                to={entry.path}
                end={entry.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-300'
                      : 'text-navy-700 dark:text-navy-50 hover:text-emerald-600 dark:hover:text-emerald-300'
                  }`
                }
              >
                {entry.label}
              </RouterNavLink>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-800/15 dark:border-white/20 text-navy-800 dark:text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-800/10 dark:border-white/10 bg-white dark:bg-navy-800 max-h-[80vh] overflow-y-auto">
          <ul className="container-page py-3">
            {navigation.map((entry) =>
              isNavGroup(entry) ? (
                <li key={entry.label} className="py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-sm font-semibold text-navy-800 dark:text-white"
                    aria-expanded={openGroup === entry.label}
                    onClick={() => setOpenGroup((g) => (g === entry.label ? null : entry.label))}
                  >
                    {entry.label}
                    <FiChevronDown className={`transition-transform ${openGroup === entry.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openGroup === entry.label && (
                    <ul className="pl-3 border-l border-navy-800/10 dark:border-white/10">
                      {entry.children.map((child) => (
                        <li key={child.path}>
                          <Link to={child.path} className="block py-2 text-sm text-navy-600 dark:text-navy-100">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={entry.path}>
                  <Link to={entry.path} className="block py-2 text-sm font-semibold text-navy-800 dark:text-white">
                    {entry.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
