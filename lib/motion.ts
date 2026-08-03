/**
 * Shared animation primitives so every component reaches for the same
 * easing curve and timing instead of hand-rolling slightly different
 * numbers per file.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const springSnappy = {
  type: "spring",
  stiffness: 300,
  damping: 22,
  mass: 0.5,
} as const;
export const springSoft = {
  type: "spring",
  stiffness: 200,
  damping: 24,
  mass: 0.6,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
