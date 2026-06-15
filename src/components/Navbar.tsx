import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { site } from "@/data/site";
import { useScrolledPast } from "@/hooks/useScrollPosition";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import logo from "@/assets/logo.png";

export function Navbar() {
  const scrolled = useScrolledPast(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // The bar is solid whenever scrolled OR the mobile menu is open.
  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        solid
          ? "border-b border-line bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between md:h-20"
      >
        <Link
          to="/"
          className="group flex items-center gap-3 leading-none"
          aria-label={`${site.name} — home`}
        >
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            width={512}
            height={512}
            className="h-10 w-10 shrink-0 md:h-11 md:w-11"
          />
          <span className="flex flex-col">
            <span className="font-display text-lg font-medium tracking-tight text-ink md:text-xl">
              {site.name}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-widest text-muted">
              {site.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative text-sm tracking-wide transition-colors duration-300 hover:text-gold",
                      "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300",
                      isActive
                        ? "text-gold after:w-full"
                        : "text-charcoal after:w-0 hover:after:w-full",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button as="link" to="/contact" size="sm">
            Consultation
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center text-charcoal"
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ivory md:hidden"
          >
            <ul className="container-page flex flex-col py-6">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block border-b border-line/60 py-4 font-display text-xl transition-colors",
                        isActive ? "text-gold" : "text-ink hover:text-gold",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-6">
                <Button as="link" to="/contact" className="w-full">
                  Schedule a Consultation
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
