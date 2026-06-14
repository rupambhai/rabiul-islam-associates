import { motion } from "framer-motion";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ConsultationForm } from "@/sections/ConsultationForm";
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
        title="Contact & Consultation"
        path="/contact"
        description="Request a confidential consultation with the chamber. Reach us by phone, email or WhatsApp in Dhaka, Bangladesh."
        jsonLd={jsonLd}
      />

      <Container as="section" className="py-section">
        <SectionHeader
          as="h1"
          eyebrow="Consultation"
          title="Request a confidential consultation."
          description="Share a brief outline of your matter and the chamber will respond promptly. All enquiries are handled with discretion."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <ConsultationForm />
          </motion.div>

          {/* Details + map */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-10 lg:border-l lg:border-line lg:pl-12"
          >
            <ContactDetails />
            <MapEmbed />
          </motion.aside>
        </div>
      </Container>
    </>
  );
}
