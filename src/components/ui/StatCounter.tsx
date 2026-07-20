import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, useReducedMotion } from 'framer-motion';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

/**
 * Animated numeric counter used for research metrics (publications, patents,
 * awards, etc). Counts up from 0 to `value` once the element scrolls into
 * view. Renders the final value immediately if the user prefers reduced
 * motion.
 */
export default function StatCounter({ value, label, suffix = '', delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, delay, shouldReduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <span
        ref={ref}
        className="block font-mono text-3xl md:text-4xl font-semibold text-white tabular-nums"
        aria-label={`${value}${suffix} ${label}`}
      >
        {display}
        {suffix}
      </span>
      <span className="mt-1 block text-xs md:text-sm uppercase tracking-wider text-white/70">{label}</span>
    </motion.div>
  );
}
