import { cn } from "@/utils/cn";

interface PortraitPlaceholderProps {
  className?: string;
}

/**
 * Elegant monochrome stand-in for the advocate's portrait. Uses a subtle
 * tonal panel and a serif monogram rather than a generic silhouette, so it
 * reads as intentional until a real photograph is supplied.
 */
export function PortraitPlaceholder({ className }: PortraitPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface",
        className,
      )}
      role="img"
      aria-label="Portrait of the advocate (placeholder)"
    >
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(var(--color-line)) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-7xl italic text-gold/30 select-none">
          R
        </span>
      </div>
      <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-muted">
        Portrait
      </span>
    </div>
  );
}
