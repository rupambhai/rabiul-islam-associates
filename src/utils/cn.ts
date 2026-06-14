/**
 * Minimal class-name combiner: filters falsy values and joins with a space.
 * Avoids pulling in a dependency for a one-line utility.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
