import { cn } from "@/utils/cn";

/** Shared control styling for inputs, selects and textareas. */
export const controlClasses =
  "w-full border border-line bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-muted/70 transition-colors duration-200 focus:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 aria-[invalid=true]:border-red-600";

/** Compose the base control classes with optional extras. */
export function controlClass(extra?: string) {
  return cn(controlClasses, extra);
}
