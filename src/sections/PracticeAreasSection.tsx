import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { practiceAreas } from "@/data/practiceAreas";
import { staggerContainer } from "@/utils/motion";

/**
 * Practice areas overview. A bordered grid with hairline separators (achieved
 * via a 1px gap on a line-coloured background) keeps the cards sharply aligned.
 */
export function PracticeAreasSection() {
  return (
    <Container as="section" className="py-section">
      <SectionHeader
        eyebrow="Practice Areas"
        title="Focused counsel across core areas of law."
        description="Representation grounded in deep familiarity with the courts of Bangladesh and the matters that come before them."
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
  );
}
