import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/**
 * Application shell shared by every route: navbar, footer, persistent
 * utilities (scroll progress, scroll restoration, WhatsApp CTA) and the
 * routed page content.
 */
export function RootLayout() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-none focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="min-h-screen pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
