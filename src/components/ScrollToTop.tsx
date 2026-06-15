import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position to the top on route change so each page opens at its
 * start. Respects in-page hash anchors when present.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let the browser handle anchor scrolling
    // "instant" forces an immediate jump; "auto" would defer to the CSS
    // scroll-behavior: smooth on <html> and animate the whole page on nav.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
