import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gold progress bar fixed to the top of the viewport, tracking how far
 * the page has been scrolled. Decorative, so hidden from assistive tech.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold"
    />
  );
}
