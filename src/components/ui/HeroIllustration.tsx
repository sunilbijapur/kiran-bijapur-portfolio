/**
 * Signature visual motif for the site: a stylised catalyst lattice with
 * water-splitting molecules (H2O -> H2 + O2) drifting above it. This is
 * the one deliberate illustrative element on the page — everything else
 * stays quiet so this can carry the "scientific identity" of the brief.
 * Pure inline SVG (no external image dependency), respects
 * prefers-reduced-motion via the .animate-float utility + global CSS override.
 */
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 800 800"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="latticeFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E6E4E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0E6E4E" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="atomGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Hexagonal catalyst-surface lattice, bottom half */}
      <g stroke="url(#latticeFade)" strokeWidth="1.2" fill="none" opacity="0.6">
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => {
            const x = col * 68 + (row % 2 === 0 ? 0 : 34) - 40;
            const y = row * 58 + 380;
            return (
              <polygon
                key={`${row}-${col}`}
                points="34,0 51,15 51,39 34,54 17,39 17,15"
                transform={`translate(${x}, ${y})`}
              />
            );
          }),
        )}
      </g>

      {/* Catalytic active sites (gold nodes) */}
      <circle cx="180" cy="470" r="7" fill="url(#atomGlow)" className="animate-float" style={{ animationDelay: '0s' }} />
      <circle cx="420" cy="520" r="7" fill="url(#atomGlow)" className="animate-float" style={{ animationDelay: '1.2s' }} />
      <circle cx="620" cy="460" r="7" fill="url(#atomGlow)" className="animate-float" style={{ animationDelay: '2.1s' }} />

      {/* Drifting molecules above the lattice, representing water splitting into H2 + O2 */}
      <g className="animate-float" style={{ animationDelay: '0s' }}>
        {/* H2O */}
        <circle cx="140" cy="180" r="14" fill="#0E6E4E" fillOpacity="0.18" stroke="#0E6E4E" strokeOpacity="0.5" />
        <circle cx="118" cy="160" r="7" fill="#0E6E4E" fillOpacity="0.14" stroke="#0E6E4E" strokeOpacity="0.4" />
        <circle cx="162" cy="160" r="7" fill="#0E6E4E" fillOpacity="0.14" stroke="#0E6E4E" strokeOpacity="0.4" />
        <line x1="140" y1="180" x2="118" y2="160" stroke="#0E6E4E" strokeOpacity="0.35" />
        <line x1="140" y1="180" x2="162" y2="160" stroke="#0E6E4E" strokeOpacity="0.35" />
      </g>

      <g className="animate-float" style={{ animationDelay: '1.6s' }}>
        {/* H2 */}
        <circle cx="600" cy="150" r="9" fill="#C6A15B" fillOpacity="0.16" stroke="#C6A15B" strokeOpacity="0.5" />
        <circle cx="624" cy="150" r="9" fill="#C6A15B" fillOpacity="0.16" stroke="#C6A15B" strokeOpacity="0.5" />
        <line x1="600" y1="150" x2="624" y2="150" stroke="#C6A15B" strokeOpacity="0.4" />
      </g>

      <g className="animate-float" style={{ animationDelay: '2.6s' }}>
        {/* O2 */}
        <circle cx="470" cy="230" r="11" fill="#0E6E4E" fillOpacity="0.16" stroke="#0E6E4E" strokeOpacity="0.45" />
        <circle cx="498" cy="230" r="11" fill="#0E6E4E" fillOpacity="0.16" stroke="#0E6E4E" strokeOpacity="0.45" />
        <line x1="470" y1="230" x2="498" y2="230" stroke="#0E6E4E" strokeOpacity="0.35" />
      </g>

      {/* Faint orbital / bond lines connecting distant molecules — suggests a reaction network */}
      <path
        d="M140,180 C260,140 380,120 470,230 C520,190 570,160 610,150"
        stroke="#0E6E4E"
        strokeOpacity="0.15"
        strokeWidth="1"
        strokeDasharray="2 6"
        fill="none"
      />
    </svg>
  );
}
