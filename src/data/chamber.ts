import {
  Brain,
  FileSearch,
  Lock,
  Scale,
  Timer,
  type LucideIcon,
} from "lucide-react";

/**
 * Editorial content for the About and "Why choose" sections.
 * Bracketed values are deliberate placeholders for the chamber to confirm.
 */

export const about = {
  intro:
    "The chamber was established to offer considered, strategic representation to clients facing consequential legal questions — from boardroom disputes to constitutional challenges before the highest court in the country.",
  biography: [
    "Enrolled as an Advocate of the Supreme Court of Bangladesh, the chamber's practice spans constitutional, corporate, civil and criminal matters, with a particular emphasis on complex litigation and appellate advocacy.",
    "Each engagement is approached with the same discipline: a careful reading of the record, a clear legal theory, and counsel that weighs both the law and the client's wider interests.",
  ],
  philosophy:
    "We believe that sound advocacy begins long before the courtroom — in rigorous preparation, candid advice and an unwavering commitment to the client's confidence. Cases are won on clarity, not noise.",
  mission:
    "To provide principled, intelligent legal representation that clients can trust with their most significant matters — delivered with discretion, precision and care.",
  credentials: [
    { label: "Advocate, Supreme Court of Bangladesh", value: "Enrolled [Year]" },
    { label: "Bangladesh Bar Council", value: "Enrolment No. [BC-XXXX]" },
    { label: "Bar Association Membership", value: "Supreme Court Bar Association" },
  ],
  stats: [
    { value: "[10]+", label: "Years of legal study & practice" },
    { value: "[150]+", label: "Matters advised & litigated" },
    { value: "5", label: "Core areas of practice" },
  ],
} as const;

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChoose: ValueProp[] = [
  {
    title: "Strategic Case Handling",
    description:
      "Every matter begins with a clear strategy — the legal theory, the evidence and the end objective mapped before the first filing.",
    icon: Scale,
  },
  {
    title: "Client Confidentiality",
    description:
      "Discretion is fundamental. Instructions and information are handled with strict confidence at every stage of an engagement.",
    icon: Lock,
  },
  {
    title: "Supreme Court Practice",
    description:
      "Representation and advocacy before the Supreme Court of Bangladesh, including constitutional and appellate matters.",
    icon: Brain,
  },
  {
    title: "Research-Driven Advocacy",
    description:
      "Arguments are built on disciplined legal research and a precise reading of authority — substance over spectacle.",
    icon: FileSearch,
  },
  {
    title: "Responsive Legal Support",
    description:
      "Clear, timely communication throughout, so clients are never left uncertain about the progress of their matter.",
    icon: Timer,
  },
];
