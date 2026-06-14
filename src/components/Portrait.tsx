import portraitImg from "@/assets/rabiul-islam.jpg";
import { site } from "@/data/site";
import { cn } from "@/utils/cn";

interface PortraitProps {
  className?: string;
  /** Eager-load when the portrait is likely above the fold. */
  priority?: boolean;
}

/**
 * Portrait of the advocate, framed with a hairline border to match the
 * editorial aesthetic. Uses a fixed aspect ratio so the layout never shifts
 * while the image loads.
 */
export function Portrait({ className, priority = false }: PortraitProps) {
  return (
    <figure
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface",
        className,
      )}
    >
      <img
        src={portraitImg}
        alt={`${site.advocate} — ${site.tagline}`}
        width={1142}
        height={1600}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </figure>
  );
}
