import { useEffect, useState } from "react";

/**
 * Returns true once the page has scrolled past the given threshold.
 * Used to transition the navbar from transparent to solid.
 */
export function useScrolledPast(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll(); // initialise on mount (e.g. on refresh mid-page)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
