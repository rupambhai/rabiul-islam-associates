import { motion } from "framer-motion";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { CtaSection } from "@/sections/CtaSection";
import { practiceAreas } from "@/data/practiceAreas";
import { staggerContainer } from "@/utils/motion";

export default function PracticeAreas() {
  return (
    <>
      <Seo
        title="Practice Areas"
        path="/practice-areas"
        description="Company law, writ petitions, Artha Rin, civil and criminal litigation before the courts of Bangladesh."
      />

      <Container as="section" className="py-section">
        <SectionHeader
          as="h1"
          eyebrow="Practice Areas"
          title="Focused counsel across core areas of law."
          description="Each area reflects a distinct discipline. Select a practice to understand the scope of representation the chamber provides."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.slug} area={area} />
          ))}
        </motion.div>
      </Container>

      <CtaSection />
    </>
  );
}
