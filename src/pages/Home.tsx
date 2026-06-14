import { Seo } from "@/components/Seo";
import { Hero } from "@/sections/Hero";
import { AboutPreview } from "@/sections/AboutPreview";
import { PracticeAreasSection } from "@/sections/PracticeAreasSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { CtaSection } from "@/sections/CtaSection";
import { site } from "@/data/site";

/** Home page composed from the hero and core overview sections. */
export default function Home() {
  // schema.org LegalService markup for the chamber's home page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    description: site.shortDescription,
    url: site.url,
    areaServed: "Bangladesh",
    telephone: site.contact.phones[0].display,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLines[0],
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
  };

  return (
    <>
      <Seo title="Strategic Legal Counsel" path="/" jsonLd={jsonLd} />
      <Hero />
      <AboutPreview />
      <PracticeAreasSection />
      <WhyChooseSection />
      <CtaSection />
    </>
  );
}
