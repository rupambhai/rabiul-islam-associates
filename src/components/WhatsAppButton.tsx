import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

/**
 * Floating WhatsApp consultation button, fixed to the bottom-right.
 * Restrained styling keeps it from competing with page content.
 */
export function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start a consultation on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-ivory shadow-lg shadow-charcoal/20 transition-all duration-300 hover:scale-105 hover:bg-gold sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
