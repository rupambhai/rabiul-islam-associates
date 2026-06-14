import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

/**
 * Chamber contact details: address, click-to-call phone, email, WhatsApp and
 * office hours. Phone and WhatsApp use tel:/wa.me links for mobile tap-through.
 */
export function ContactDetails() {
  return (
    <div className="space-y-8">
      <dl className="space-y-6">
        <div className="flex gap-4">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">
              Chamber
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-charcoal">
              {site.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </dd>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">
              Telephone
            </dt>
            <dd className="mt-1 flex flex-col gap-1 text-sm text-charcoal">
              {site.contact.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="transition-colors hover:text-gold"
                >
                  {phone.display}
                </a>
              ))}
            </dd>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">Email</dt>
            <dd className="mt-1 text-sm text-charcoal">
              <a
                href={site.contact.emailHref}
                className="transition-colors hover:text-gold"
              >
                {site.contact.email}
              </a>
            </dd>
          </div>
        </div>

        <div className="flex gap-4">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">
              Office Hours
            </dt>
            <dd className="mt-1 text-sm text-charcoal">
              {site.contact.officeHours}
            </dd>
          </div>
        </div>
      </dl>

      <a
        href={site.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-line px-5 py-3 text-xs uppercase tracking-widest text-charcoal transition-colors hover:border-gold hover:text-gold"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
        Message on WhatsApp
      </a>
    </div>
  );
}
