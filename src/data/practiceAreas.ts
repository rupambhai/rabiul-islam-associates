import {
  Building2,
  Scale,
  Landmark,
  Gavel,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

export interface PracticeArea {
  /** URL slug used for the detail route. */
  slug: string;
  title: string;
  /** Lucide icon component (kept restrained — one per area). */
  icon: LucideIcon;
  /** One-line summary used on cards and meta descriptions. */
  summary: string;
  /** Short paragraph shown on the card / section preview. */
  excerpt: string;
  /** Longer narrative for the detail page. */
  overview: string[];
  /** Representative scope of work shown as a checklist. */
  scope: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "company-law",
    title: "Company Law",
    icon: Building2,
    summary: "Corporate structuring, governance and commercial dispute advisory.",
    excerpt:
      "Advisory and representation across incorporation, governance, shareholder arrangements and corporate disputes for companies operating in Bangladesh.",
    overview: [
      "We advise founders, boards and investors on the full corporate lifecycle — from incorporation and shareholder arrangements to restructuring, regulatory compliance and the resolution of commercial disputes.",
      "Our approach pairs technical command of the Companies Act and allied regulation with a commercial understanding of how decisions affect a business, ensuring counsel that is both legally sound and practical.",
    ],
    scope: [
      "Company incorporation, conversion and winding up",
      "Shareholder and joint-venture agreements",
      "Board governance and regulatory compliance",
      "Mergers, acquisitions and restructuring",
      "Shareholder and commercial disputes",
    ],
  },
  {
    slug: "writ-petitions",
    title: "Writ Petitions",
    icon: Landmark,
    summary: "Constitutional remedies before the High Court Division.",
    excerpt:
      "Constitutional litigation under Article 102 — challenging unlawful state action and enforcing fundamental rights before the High Court Division.",
    overview: [
      "We prepare and argue writ petitions under Article 102 of the Constitution, seeking remedies against actions that are without lawful authority or in violation of fundamental rights.",
      "Each petition is built on disciplined legal research and a clear constitutional theory, whether the matter concerns administrative overreach, regulatory decisions or the protection of individual liberties.",
    ],
    scope: [
      "Certiorari, mandamus and prohibition",
      "Enforcement of fundamental rights",
      "Challenges to administrative and regulatory action",
      "Public interest litigation",
      "Interim injunctions and stay applications",
    ],
  },
  {
    slug: "artha-rin-matters",
    title: "Artha Rin Matters",
    icon: Scale,
    summary: "Financial loan recovery litigation for lenders and borrowers.",
    excerpt:
      "Representation in Artha Rin Adalat proceedings — loan recovery suits, execution and appeals for both financial institutions and borrowers.",
    overview: [
      "We act in proceedings before the Artha Rin Adalat, representing both lending institutions pursuing recovery and borrowers defending their position.",
      "From the framing of the suit through execution and appeal, we focus on protecting our client's commercial interests while navigating the procedural rigour the specialised jurisdiction demands.",
    ],
    scope: [
      "Loan recovery suits for financial institutions",
      "Defence of borrowers and guarantors",
      "Execution and sale proceedings",
      "Settlement and restructuring negotiation",
      "Appeals and revisions",
    ],
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    icon: Gavel,
    summary: "Property, contract and declaratory disputes across the civil courts.",
    excerpt:
      "Comprehensive civil dispute resolution — property, contract, succession and declaratory matters from trial through the appellate courts.",
    overview: [
      "We represent clients across the spectrum of civil disputes, including title and property matters, contractual claims, partition, succession and declaratory relief.",
      "Strategy is set early and revisited deliberately, with careful attention to evidence and procedure at trial and a clear view of the prospects on appeal.",
    ],
    scope: [
      "Title, partition and property disputes",
      "Contract and money claims",
      "Succession and probate matters",
      "Injunctions and declaratory relief",
      "Civil appeals and revisions",
    ],
  },
  {
    slug: "criminal-litigation",
    title: "Criminal Litigation",
    icon: ShieldAlert,
    summary: "Defence and representation in criminal trials and appeals.",
    excerpt:
      "Measured criminal defence and representation — bail, trial advocacy and appeals conducted with discretion and rigour.",
    overview: [
      "We provide considered representation in criminal matters, from bail applications and trial advocacy to appeals and revisions before the higher courts.",
      "Every engagement is handled with discretion and a meticulous reading of the record, ensuring our client's case is presented with clarity and force.",
    ],
    scope: [
      "Bail and anticipatory bail applications",
      "Trial advocacy and defence",
      "Quashment proceedings",
      "Criminal appeals and revisions",
      "Advisory on investigation and procedure",
    ],
  },
];

/** Lookup helper for the detail route. */
export const getPracticeArea = (slug: string) =>
  practiceAreas.find((area) => area.slug === slug);
