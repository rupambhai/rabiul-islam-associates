import { useEffect } from "react";
import { site } from "@/data/site";

interface SeoProps {
  title: string;
  description?: string;
  /** Path relative to the site root, e.g. "/about". */
  path?: string;
  /** Absolute or root-relative social share image. */
  image?: string;
  /** Exclude from search indexing (e.g. the 404 page). */
  noindex?: boolean;
  /** Optional JSON-LD structured data injected into <head>. */
  jsonLd?: Record<string, unknown>;
}

const DEFAULT_IMAGE = "/og-image.svg";
const JSONLD_ID = "route-jsonld";

/** Find an existing meta tag (by name or property) or create one, then set it. */
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-route document head manager. Imperatively updates the title, meta
 * description, robots directive, Open Graph / Twitter cards, canonical URL and
 * optional JSON-LD — updating the static tags from index.html in place so no
 * duplicates are created. Reliable for a client-rendered SPA without a
 * third-party head library; static index.html tags remain the fallback for
 * non-JS social scrapers.
 */
export function Seo({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
}: SeoProps) {
  const fullTitle = `${title} | ${site.name}`;
  const desc = description ?? site.shortDescription;
  const canonical = `${site.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta("name", "description", desc);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertCanonical(canonical);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", imageUrl);
  }, [fullTitle, desc, canonical, imageUrl, noindex]);

  // JSON-LD is route-specific: inject on mount, remove on unmount.
  useEffect(() => {
    if (!jsonLdString) return;
    let script = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = JSONLD_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = jsonLdString;
    return () => {
      document.getElementById(JSONLD_ID)?.remove();
    };
  }, [jsonLdString]);

  return null;
}
