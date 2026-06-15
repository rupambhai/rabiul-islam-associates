import { motion } from "framer-motion";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactDetails } from "@/sections/ContactDetails";
import { MapEmbed } from "@/components/MapEmbed";
import { site } from "@/data/site";
import { fadeUp } from "@/utils/motion";

export default function Contact() {
  // ContactPage + LegalService schema for richer search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    description: site.shortDescription,
    url: `${site.url}/contact`,
    telephone: site.contact.phones[0].display,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLines[0],
      addressLocality: "Dhaka",
      postalCode: "1000",
      addressCountry: "BD",
    },
    openingHours: "Sa-Th 09:00-21:00",
  };

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact the chamber by phone, email or WhatsApp in Dhaka, Bangladesh. All enquiries are handled in strict confidence."
        jsonLd={jsonLd}
      />

      <Container as="section" className="py-section">
        <SectionHeader
          as="h1"
          eyebrow="Contact"
          title="Reach the chamber directly."
          description="For consultations and enquiries, contact the chamber by phone, email or WhatsApp. All communication is handled with discretion."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <ContactDetails />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <MapEmbed />
          </motion.div>
        </div>
      </Container>
    </>
  );
}
