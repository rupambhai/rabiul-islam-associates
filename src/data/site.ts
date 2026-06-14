/**
 * Central source of truth for chamber identity, contact details and
 * verbatim copy reused across the site (footer, contact page, schema markup).
 * Update placeholders here once and every surface stays in sync.
 */
export const site = {
  name: "Rabiul Islam & Associates",
  advocate: "Md. Rabiul Islam",
  tagline: "Advocate, Supreme Court of Bangladesh",
  shortDescription:
    "Strategic legal counsel in constitutional, corporate, civil and criminal matters before the Supreme Court of Bangladesh.",
  url: "https://www.example-chamber.com",

  contact: {
    // Multiple chamber lines; the first is treated as primary for schema.
    phones: [
      { display: "01842 856661", href: "tel:+8801842856661" },
      { display: "01733 966943", href: "tel:+8801733966943" },
    ],
    whatsapp: "01842 856661",
    whatsappHref: "https://wa.me/8801842856661",
    email: "rabiuly@gmail.com",
    emailHref: "mailto:rabiuly@gmail.com",
    addressLines: [
      "Chamber 604, Annex Extension Building",
      "Supreme Court Bar Bhaban",
      "Dhaka 1000, Bangladesh",
    ],
    // Approximate map embed for the Supreme Court precinct in Dhaka.
    mapEmbedUrl:
      "https://www.google.com/maps?q=Bangladesh+Supreme+Court+Dhaka&output=embed",
    officeHours: "Saturday – Thursday, 9:00 AM – 9:00 PM",
  },

  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
  ],
} as const;
