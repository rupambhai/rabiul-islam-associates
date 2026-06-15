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
      "We provide comprehensive legal advisory and strategic representation for businesses operating in Bangladesh across the full corporate lifecycle. Our services include company incorporation and regulatory setup, drafting and negotiation of shareholder agreements, corporate governance advisory, board and compliance matters, restructuring, partnership arrangements, and dispute resolution. We assist startups, private companies, foreign investors, and established enterprises in navigating Bangladesh's corporate and commercial legal framework with practical, business-focused solutions.",
      "Our chamber also represents clients in shareholder disputes, director conflicts, breach of fiduciary duty claims, minority shareholder protection matters, and other complex corporate litigation before relevant courts, tribunals, and regulatory authorities.",
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
      "Constitutional litigation under Article 102 of the Constitution of Bangladesh involves invoking the extraordinary writ jurisdiction of the High Court Division to challenge unlawful, arbitrary, or unconstitutional actions of public authorities, statutory bodies, and government agencies. This area of practice focuses on the protection and enforcement of fundamental rights guaranteed by the Constitution, including issues relating to due process, equality before law, judicial review, administrative legality, and abuse of executive power.",
      "The practice encompasses writ petitions concerning ultra vires government actions, violations of natural justice, unlawful detention, procurement irregularities, administrative overreach, public interest litigation, and constitutional interpretation. Representation includes strategic advisory, drafting and conducting writ proceedings, obtaining interim reliefs and stay orders, and appearing before the High Court Division and Appellate Division in matters involving constitutional and public law disputes.",
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
      "Representation in proceedings before the Artha Rin Adalat, including comprehensive legal support in loan recovery suits, decree execution, auction and enforcement matters, injunctions, settlement negotiations, restructuring disputes, and appellate proceedings.",
      "Advising and representing both financial institutions and borrowers in complex banking and financial litigation arising from defaulted loans, securities enforcement, mortgage recovery, guarantor liability, and recovery certificate execution under the prevailing financial and banking laws of Bangladesh.",
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
      "Comprehensive legal representation in civil disputes involving property rights, contractual obligations, succession and inheritance matters, recovery claims, injunctions, declaratory suits, partition disputes, and related civil proceedings.",
      "Services include legal strategy development, drafting and filing of plaints, written statements, appeals and revisions, conducting hearings before trial courts and appellate forums, evidentiary management, interim relief applications, and full-spectrum litigation support through every stage of the judicial process, including execution and enforcement of decrees.",
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
      "Strategic criminal defence and courtroom representation across all stages of criminal proceedings — including anticipatory bail, regular bail, remand hearings, trial advocacy, cross-examination, criminal revisions and appellate matters.",
      "The practice is grounded in procedural precision, confidentiality and disciplined legal analysis, with a focus on protecting clients' rights while navigating complex criminal allegations with discretion, rigour and professional integrity.",
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
