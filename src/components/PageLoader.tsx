/** Minimal, theme-aware fallback shown while a lazy route chunk loads. */
export function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-line border-t-gold" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
