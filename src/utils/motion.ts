import type { Variants } from "framer-motion";

/**
 * Shared, deliberately restrained motion variants.
 * A single fade-up is reused throughout the site for a calm, cohesive feel.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Container that staggers children using the fadeUp variant. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
