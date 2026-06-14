import { site } from "@/data/site";

/**
 * Google Maps embed of the chamber location. Lazy-loaded so it never blocks
 * first paint. Replace `mapEmbedUrl` in src/data/site.ts with the chamber's
 * precise location embed.
 */
export function MapEmbed() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-surface">
      <iframe
        title="Chamber location on Google Maps"
        src={site.contact.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-[1.05]"
        style={{ border: 0 }}
      />
    </div>
  );
}
