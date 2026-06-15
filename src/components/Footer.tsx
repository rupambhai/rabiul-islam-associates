import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { practiceAreas } from "@/data/practiceAreas";
import { site } from "@/data/site";
import logo from "@/assets/logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ivory">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Identity */}
          <div className="max-w-xs">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label={`${site.name} — home`}
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                width={512}
                height={512}
                className="h-12 w-12 shrink-0"
              />
              <span className="font-display text-xl font-medium leading-tight text-ink">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.shortDescription}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="eyebrow mb-5">Navigation</h2>
            <ul className="space-y-3">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-charcoal transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Practice areas */}
          <nav aria-label="Practice areas">
            <h2 className="eyebrow mb-5">Practice</h2>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="text-sm text-charcoal transition-colors hover:text-gold"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="eyebrow mb-5">Chamber</h2>
            <ul className="space-y-4 text-sm text-charcoal">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                <span className="not-italic leading-relaxed text-muted">
                  {site.contact.addressLines.join(", ")}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="flex flex-col gap-1">
                  {site.contact.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="transition-colors hover:text-gold"
                    >
                      {phone.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a
                  href={site.contact.emailHref}
                  className="transition-colors hover:text-gold"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {site.social.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-gold"
                >
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
